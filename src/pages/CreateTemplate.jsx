import React, { useState } from "react";
import {
  Plus,
  Workflow,
  Zap,
  Save,
  ArrowRight,
} from "lucide-react";

const CreateTemplate = () => {
  const [steps, setSteps] = useState([
    "Trigger Event",
    "Process Data",
    "Send Notification",
  ]);

  const addStep = () => {
    setSteps([...steps, `New Step ${steps.length + 1}`]);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <span className="rounded-full bg-violet-100 px-4 py-2 text-sm font-medium text-violet-700">
            Template Builder
          </span>

          <h1 className="mt-6 text-5xl font-bold text-slate-900">
            Create Your Own Template
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-slate-600">
            Design reusable workflow templates, automate repetitive tasks,
            and share proven processes across your organization.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-3">
          {/* Form */}
          <div className="lg:col-span-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900">
                Template Information
              </h2>

              <div className="mt-8 space-y-6">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Template Name
                  </label>

                  <input
                    type="text"
                    placeholder="Customer Support Automation"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-violet-500"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Category
                  </label>

                  <select className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none bg-white">
                    <option>Operations</option>
                    <option>AI</option>
                    <option>Marketing</option>
                    <option>Sales</option>
                    <option>Support</option>
                    <option>Engineering</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Description
                  </label>

                  <textarea
                    rows="5"
                    placeholder="Describe what this workflow does..."
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-violet-500"
                  />
                </div>
              </div>
            </div>

            {/* Workflow Builder */}
            <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-slate-900">
                  Workflow Builder
                </h2>

                <button
                  onClick={addStep}
                  className="flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-white hover:bg-black transition"
                >
                  <Plus size={18} />
                  Add Step
                </button>
              </div>

              <div className="mt-10 space-y-5">
                {steps.map((step, index) => (
                  <div key={`${step}-${index}`}>
                    <div className="flex items-center gap-4 rounded-2xl border border-slate-200 p-5">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-100 text-violet-700">
                        <Workflow size={20} />
                      </div>

                      <div>
                        <h3 className="font-semibold text-slate-900">
                          {step}
                        </h3>

                        <p className="text-sm text-slate-500">
                          Configure this workflow step.
                        </p>
                      </div>
                    </div>

                    {index !== steps.length - 1 && (
                      <div className="ml-6 h-8 border-l-2 border-dashed border-slate-300" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Preview */}
          <div>
            <div className="sticky top-24 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900">
                Template Preview
              </h2>

              <div className="mt-8">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-100 text-violet-700">
                  <Zap size={28} />
                </div>

                <h3 className="mt-5 text-xl font-semibold text-slate-900">
                  New Workflow Template
                </h3>

                <p className="mt-3 text-slate-600">
                  Custom workflow automation template ready for deployment.
                </p>
              </div>

              <div className="mt-8 space-y-5">
                <div className="flex justify-between">
                  <span className="text-slate-500">Workflow Steps</span>
                  <span className="font-semibold">{steps.length}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-slate-500">Setup Time</span>
                  <span className="font-semibold">5 Minutes</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-slate-500">Difficulty</span>
                  <span className="font-semibold">Beginner</span>
                </div>
              </div>

              <div className="mt-10 space-y-4">
                <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-4 font-semibold text-white hover:bg-black transition">
                  <Save size={18} />
                  Save Draft
                </button>

                <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-violet-600 px-5 py-4 font-semibold text-white hover:bg-violet-700 transition">
                  <Create Template />
                  Create Template
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTemplate;