import React from 'react';
import { FileListWrapper, FileListHeader, FileListName, FileListDate, FileListSize } from './styles';

const FileList = () => {
  return (
    <FileListWrapper>
      <FileListHeader>
        <FileListName>Название</FileListName>
        <FileListDate>Дата</FileListDate>
        <FileListSize>Размер</FileListSize>
      </FileListHeader>
    </FileListWrapper>
  );
};

export default FileList;