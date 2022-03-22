import React, { FunctionComponent, useEffect, useState } from 'react';
import Select from 'react-select';
import { getKeys } from '../common/useData';
import _data from '../common/utils/_data';
// we need this to make JSX compile
type ComponentType = {}
const TheComponent: FunctionComponent<ComponentType> = ({}) => {
    const [keys, setKeys] = useState<string[]>(null);
    const [newValue, setNewValue] = useState<string>('');
    const [isSaving, setIsSaving] = useState<boolean>(false);
    const [selectedKey, setSelectedKey] = useState<string>('');
    useEffect(() => {
        getKeys().then(setKeys);
    }, []);
    const save = () => {
        _data.get(`/api/${encodeURIComponent(selectedKey.value)}/${encodeURIComponent(newValue)}/clone`)
            .then(() => {
                document.location = `/${encodeURIComponent(newValue)}/edit`;
            });
    };
    return (
        <div className="container">
            <Row>
                <div style={{ width: 200 }}>
                    <Select options={keys?.map(v => ({ label: v, value: v }))} value={selectedKey} onChange={e => setSelectedKey(Utils.safeParseEventValue(e))}>
                        {keys?.map(v => (
                            <option key={v} value={v}>{v}</option>
                        ))}
                    </Select>
                </div>
                <span className="ml-2">
            New url
                </span>
                <input
                  className="input ml-4" type="text" value={newValue}
                  onChange={e => setNewValue(Utils.safeParseEventValue(e))}
                />
                <ButtonPrimary disabled={isSaving || !newValue || !selectedKey?.value} onClick={save} className="ml-4">
            Save
                </ButtonPrimary>
            </Row>
        </div>

    );
};

export default TheComponent;
