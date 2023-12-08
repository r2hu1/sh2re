"use client";

import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { UploadButton, UploadDropzone } from "../uploadthing/uploadthing";
import { ourFileRouter } from "@/app/api/uploadthing/core";
import { useToast } from "@/components/ui/use-toast"
import { Input } from "@/components/ui/input"
import { getRedirectResult } from "firebase/auth";
import { auth } from "@/lib/firebase-config";

const Fileinput = () => {

    const [filez, setFilez] = useState("");
    const [ifiles, setIfiles] = useState([]);
    const handleFileChange = (e) => {
        setIfiles([...e.target.files]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const { toast } = useToast();

    const [isLogged,setIsLogged] = useState(false);
    fetch('/api/login')
    .then(response => response.json())
    .then(data => setIsLogged(data.isLogged));

    return (
        <>
            <div className="flex justify-center w-full mx-auto sm:max-w-lg mt-8 mb-14 p-6">

                <div className="flex flex-col items-center justify-center w-full bg-white sm:w-3/4 sm:rounded-lg">
                    <div className="mt-10 mb-10 text-center">
                        <h2 className="text-2xl font-semibold mb-2">Upload your files</h2>
                        <p className="text-xs text-gray-500">File should be of format .jpg, .jpeg, .png, .webp, .pdf</p>
                    </div>

                    {isLogged ? (<UploadDropzone
                        endpoint="imageUploader"
                        onClientUploadComplete={(res) => {
                            setFilez(res);
                            console.log(res);
                            toast({
                                title: "Uploaded!",
                                description: "File uploaded successfully.",
                                status: "success",
                                isClosable: true,
                            });
                        }}
                        onUploadError={(error) => {
                            toast({
                                title: "Error!",
                                description: error.message,
                                status: "error",
                                isClosable: true,
                            })
                        }}
                        onUploadBegin={(name) => {
                            console.log("Uploading: ", name);
                        }}
                    />) : (
                        <div className="flex flex-col items-center justify-center w-full bg-white sm:w-3/4 sm:rounded-lg">
                            <p className="text-xs text-gray-500">Please login to upload files.</p>
                        </div>
                    )}

                    {filez.length > 0 && (
                        <div className="mt-8 mx-auto flex gap-2">
                            <Input type="text" value={filez[0].url} readonly></Input>
                            <Button onClick={() => {navigator.clipboard.writeText(filez[0].url);toast({title: "Copied To Clipboard!"})}}>Copy</Button>
                        </div>
                    )}

                </div>
            </div>
        </>
    );
};

export default Fileinput;