import React, { useState } from "react";

const PatientDetails = () => {
  const [showForm, setShowForm] = useState(false);
  const [patient, setPatient] = useState({
    id: "220239493",
    age: "68",
    gender: "Male",
    bloodGroup: "A+",
    height: "1.78 m",
    weight: "75 kg",
    allergies: "Milk, Dust",
    diseases: "Diabetes",
    location: "Kolkata",
  });

  const handleChange = (e) => {
    setPatient({ ...patient, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated patient:", patient);
    setShowForm(false);
  };

  return (
    <>
      {/* Main Patient Card */}
      <div className="card-green h-full relative p-4 rounded-xl bg-[#a8cf45] overflow-hidden hover:scale-105 hover:shadow-xl transition-transform transition-shadow duration-200 cursor-pointer">
        {/* Background Image - under text */}
        <img
          src="/Patient.svg"
          alt=""
          className="absolute right-0 bottom-0 w-52 h-52 opacity-20 object-contain z-0"
        />

        <div className="relative z-10">
          <div className="mb-2 font-semibold text-[#000]">ID-{patient.id}</div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-1 text-[#000]">
            <div>
              <span className="text-sm">Age</span>
              <p className="font-bold text-[#000]">{patient.age}</p>
            </div>
            <div>
              <span className="text-sm">Blood Gr.</span>
              <p className="font-bold text-[#000]">{patient.bloodGroup}</p>
            </div>
            <div>
              <span className="text-sm">Gender</span>
              <p className="font-bold text-[#000]">{patient.gender}</p>
            </div>
            <div>
              <span className="text-sm">Height</span>
              <p className="font-bold text-[#000]">{patient.height}</p>
            </div>
            <div>
              <span className="text-sm">Allergies</span>
              <p className="font-bold text-[#000]">{patient.allergies}</p>
            </div>
            <div>
              <span className="text-sm">Weight</span>
              <p className="font-bold text-[#000]">{patient.weight}</p>
            </div>
            <div>
              <span className="text-sm">Diseases</span>
              <p className="font-bold text-[#000]">{patient.diseases}</p>
            </div>
            <div>
              <span className="text-sm">Lives in</span>
              <p className="font-bold text-[#000]">{patient.location}</p>
            </div>
          </div>

          {/* Update Button */}
          <button
            onClick={() => setShowForm(true)}
            className="mt-4 bg-[#283618] hover:bg-[#3a4f2d] hover:scale-105 hover:shadow-md transition-all duration-200 text-white rounded-md px-4 py-1.5 flex items-center gap-1.5 relative z-20"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
            </svg>
            Update
          </button>
        </div>
      </div>

      {/* Slide-up Form Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-gray-200/30 backdrop-blur-sm flex items-center justify-center transition-opacity duration-10 ease-in ${
          showForm ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`bg-[#f0f9ec] w-full max-w-xl rounded-2xl p-6 text-black shadow-xl transform transition-all duration-10 ease-in ${
            showForm
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-95 translate-y-4"
          }`}
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold text-[#283618]">
              Edit Patient Details
            </h2>
            <button
              onClick={() => setShowForm(false)}
              className="text-gray-500 hover:text-red-500 font-bold text-lg"
            >
              ×
            </button>
          </div>

          <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
            {[
              { label: "Age", name: "age" },
              { label: "Blood Gr.", name: "bloodGroup" },
              { label: "Gender", name: "gender" },
              { label: "Height", name: "height" },
              { label: "Weight", name: "weight" },
              { label: "Allergies", name: "allergies" },
              { label: "Diseases", name: "diseases" },
              { label: "Lives in", name: "location" },
            ].map((field) => (
              <div key={field.name}>
                <label className="text-sm text-[#555] block mb-1">
                  {field.label}
                </label>
                <input
                  type="text"
                  name={field.name}
                  value={patient[field.name]}
                  onChange={handleChange}
                  className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
                />
              </div>
            ))}

            <div className="col-span-2 flex justify-between mt-4">
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="px-4 py-1.5 rounded-md border border-gray-400 text-gray-700 hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-[#283618] hover:bg-[#3a4f2d] text-white px-4 py-1.5 rounded-md"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default PatientDetails;
