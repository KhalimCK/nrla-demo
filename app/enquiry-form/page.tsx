"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [nrlaUserId, setNrlaUserId] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNrlaUserId(event.target.value);
  };

  // Define the function to update the hidden field value
  const updateHiddenField = (form: HTMLElement) => {
    const hiddenInput = form.querySelector(
      'input[name="nrla_membership_id"]'
    ) as HTMLInputElement;
    if (hiddenInput) {
      hiddenInput.value = nrlaUserId;
      hiddenInput.dispatchEvent(new Event("change"));
    }
  };

  useEffect(() => {
    const scriptLoaded = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          region: "eu1",
          portalId: "145275138",
          formId: "51b3a12d-fbf6-43f7-aced-11dda91c1e4b",
          target: "#hubspotForm",
          onFormReady: function (form: any) {
            updateHiddenField(form);
          },
        });
      }
    };

    const script = document.createElement("script");
    script.src = "//js-eu1.hsforms.net/forms/embed/v2.js";
    script.onload = scriptLoaded;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [nrlaUserId]); // Reload the script whenever nrlaUserId changes

  return (
    <div className="flex items-center justify-center min-h-screen bg-white py-8 px-4">
      <div className="p-8 bg-gray-200 rounded-lg shadow-lg w-full max-w-lg overflow-auto">
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
        <div id="hubspotForm"></div>
      </div>
    </div>
  );
}
