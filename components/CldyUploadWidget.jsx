import { CldUploadWidget } from 'next-cloudinary';
import React from 'react'

const CldyUploadWidget = ({className,text}) => {
  const handleUpload = (error, result, widget) => {
    if (error) {
      console.log(error);
      return;
    }
    onUpload(result.info.secure_url);
  };
  return (
    <main className="flex flex-col items-center justify-between">
      <CldUploadWidget uploadPreset="ogtUploadPreset" onSuccess={handleUpload}>
        {({ open }) => {
          return <button onClick={() => open()} className={className}>{text}</button>;
        }}
      </CldUploadWidget>
    </main>
  );
}

export default CldyUploadWidget
