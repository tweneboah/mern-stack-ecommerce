// import React from 'react';
// import { useDropzone } from 'react-dropzone';

// function FileUpload(props) {
//   const {
//     acceptedFiles,
//     fileRejections,
//     getRootProps,
//     getInputProps,
//   } = useDropzone({
//     accept: 'image/jpeg, image/png',
//     maxFiles: 4,
//   });

//   console.log(acceptedFiles);

//   //This contains the name of the files
//   const acceptedFileItems = acceptedFiles.map(file => (
//     <li key={file.path}>
//       {file.path} - {file.size} bytes
//     </li>
//   ));

//   //This contain the error message
//   const fileRejectionItems = fileRejections.map(({ file, errors }) => (
//     <li key={file.path}>
//       {file.path} - {file.size} bytes
//       <ul>
//         {errors.map(e => (
//           <li key={e.code}>{e.message}</li>
//         ))}
//       </ul>
//     </li>
//   ));

//   return (
//     <section>
//       <div {...getRootProps({ className: 'bg-red-100 w-1/2' })}>
//         <input {...getInputProps()} />
//         <p>Drag 'n' drop some files here, or click to select files</p>
//         <em>(Only *.jpeg and *.png images will be accepted)</em>
//       </div>
//       <aside>
//         {fileRejectionItems}

//         <ul>{acceptedFileItems}</ul>

//         <ul>{fileRejectionItems}</ul>
//       </aside>
//     </section>
//   );
// }
// export default FileUpload;

import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

function FileUpload() {
  const onDrop = useCallback(acceptedFiles => {
    acceptedFiles.forEach(file => {
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => {
        // Do whatever you want with the file contents
        const binaryStr = reader.result;
        console.log(binaryStr);
      };
    });
  }, []);
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <p>Drag 'n' drop some files here, or click to select files</p>
      <h1>GOOOO</h1>
    </div>
  );
}

export default FileUpload;
