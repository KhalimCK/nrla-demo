"use client";
import React, { useState, useEffect, useRef } from "react";

export default function Home(): JSX.Element {
  const [nrlaUserId, setNrlaUserId] = useState<string>("");
  const formRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setNrlaUserId(event.target.value);
  };

  useEffect((): (() => void) => {
    const injectScript = (): void => {
      if (formRef.current) {
        // Clear any existing form
        formRef.current.innerHTML = "";

        // Create a new script element
        const script = document.createElement("script");
        script.type = "text/javascript";

        // Set the src with the nrlaUserId parameter
        script.src = `https://form.jotform.com/jsform/242354918474060?nrlaMembership=${encodeURIComponent(
          nrlaUserId
        )}`;
        script.async = true;

        // Append the script to the form container
        formRef.current.appendChild(script);
      }
    };

    // Inject the script whenever nrlaUserId changes
    injectScript();

    // Cleanup when the component unmounts
    return (): void => {
      if (formRef.current) {
        formRef.current.innerHTML = "";
      }
    };
  }, [nrlaUserId]);

  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="p-8 bg-gray-200 rounded-lg shadow-lg w-5/12 max-w-5/12">
        <label
          htmlFor="nrlaId"
          className="block text-lg font-medium text-gray-700"
        >
          NRLA Membership ID:
        </label>
        <input
          type="text"
          id="nrlaId"
          value={nrlaUserId}
          onChange={handleInputChange}
          placeholder="Enter your NRLA ID"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        <div className="text-lg text-gray-700 mt-2 mb-6">
          Current ID: {nrlaUserId}
        </div>
        {/* Form container where the JotForm will be injected */}
        <div id="jotformContainer" ref={formRef}></div>
      </div>
    </div>
  );
}
