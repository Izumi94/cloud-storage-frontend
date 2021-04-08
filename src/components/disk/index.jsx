import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getFiles } from '../../actions/file';

const Disk = () => {
    const dispatch = useDispatch();
    const currentDir = useSelector(state => state.files.currentDir);

    React.useEffect(() => {
        dispatch(getFiles(currentDir));
    }, [currentDir]);
    return (
        <div className="disk">
            <div className="disk__btns">
                <button className="disk__back">Back</button>
                <button className="disk__create">Create dir</button>
            </div>
        </div>
    )
}

export default Disk
