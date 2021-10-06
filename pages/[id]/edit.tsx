import { useRouter } from 'next/router';
import { HotKeys, configure } from 'react-hotkeys';
import { FunctionComponent, useEffect, useRef, useState } from 'react';
import JSONInput from 'react-json-editor-ajrm';
import locale from 'react-json-editor-ajrm/locale/en';
import _data from 'common/utils/_data';
import { useStep } from '../../common/converstion-steps';
import useData from '../../common/useData';

let Editor;
configure({
    ignoreTags: null,
    ignoreEventsCondition: () => false,
});
// we need this to make JSX compile
type ComponentType = {}
const TheComponent: FunctionComponent<ComponentType> = ({}) => {
    const r = useRouter();
    const id = r.query.id;
    const {
        data,
    } = useData(id, () => r.replace('/404'));
    const [isValid, setIsValid] = useState<boolean>(false);
    const [isSaving, setIsSaving] = useState<boolean>(false);
    const [newData, setNewData] = useState<any>();
    const dataRef = useRef();
    const [keyPressed, setKeyPressed] = useState(false);

    useEffect(() => {
        dataRef.current = data;
        if (keyPressed) {
            setKeyPressed(false);
        }
    }, [keyPressed]);

    const listener = (e) => {
        try {
            setIsValid(true);
            JSON.parse(e.target.innerText);
        } catch (e) {
            setIsValid(true);
        }
    };
    const getAuth = () => {
        if (!API.getAuth()) {
            API.setAuth(prompt('Password'));
        }
        console.log(`${document.location.origin}/api/auth`);
        _data.post(`${document.location.origin}/api/auth`, { auth: API.getAuth() }).then((r) => {

        }).catch((e) => {
            console.log(e);
            API.setAuth('');
            getAuth();
        });
    };
    useEffect(() => {
        getAuth();
    }, []);
    useEffect(() => {

    }, []);
    useEffect(() => {
        if (data && !newData) {
            const ordered = Object.keys(data).sort().reduce(
                (obj, key) => {
                    obj[key] = data[key];
                    return obj;
                },
                {},
            );

            setNewData(ordered);
        }
    }, [data]);

    const update = function (e) {
        e?.preventDefault?.();
        setIsSaving(true);
        setTimeout(() => {
            _data.put(`${document.location.origin}/api/${id}/update`, { auth: API.getAuth(), data: dataRef.current })
                .then((r) => {
                    setIsSaving(false);
                }).catch((e) => {
                    setIsSaving(false);
                });
        }, 500);
    };

    return (

        <div>
            <HotKeys
              keyMap={{
                  SAVE: 'command+s',
              }}
              handlers={{ SAVE: update }}
            >

                <Button onClick={update} style={{ opacity: isSaving ? 0.5 : 1, position: 'absolute', zIndex: 1000, top: 10, right: 10 }} className="btn--primary">
                    {isSaving ? 'Saving' : 'Save'}
                </Button>
                {newData && (
                <JSONInput
                  onKeyPressUpdate
                  waitAfterKeyPress={50}
                  onChange={(e) => {
                      if (e.jsObject) {
                          dataRef.current = e.jsObject;
                      }
                  }} width="100%" height="100%"

                  placeholder={newData}
                />
                )}
            </HotKeys>
        </div>
    );
};

export default TheComponent;
