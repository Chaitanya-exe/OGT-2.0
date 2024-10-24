"use client"
import React from 'react'
import axios from "axios"
import { useState } from 'react'
import { CldUploadWidget } from 'next-cloudinary'

const page = () => {
    const handleUpload = (error, result, widget) => {
        if (error) {
            console.log(error);
            return;
        }
        onUpload(result.info.secure_url);
    }
    return (
        <main className='flex flex-col items-center justify-between'>
            <CldUploadWidget uploadPreset='ogtUploadPreset' onSuccess={handleUpload}>
                {({ open }) => {
                    return <button onClick={() => open()}>Upload an Image</button>
                }}
            </CldUploadWidget>
        </main>
    )
}

export default page