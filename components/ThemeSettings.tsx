"use client";

import { useState } from "react";
import {
  Palette,
  Upload,
  Type,
  LayoutTemplate,
  Check,
  ImageIcon,
} from "lucide-react";

const themeColors = [
  "#2563EB",
  "#7C3AED",
  "#059669",
  "#EA580C",
  "#E11D48",
  "#111827",
];

const fontOptions = [
  "Inter",
  "Poppins",
  "Montserrat",
  "Roboto",
  "DM Sans",
];

const layoutOptions = [
  {
    id: "modern",
    title: "Modern",
  },
  {
    id: "minimal",
    title: "Minimal",
  },
  {
    id: "classic",
    title: "Classic",
  },
];

export default function ThemeSettings() {
  const [selectedColor, setSelectedColor] = useState("#2563EB");
  const [selectedFont, setSelectedFont] = useState("Inter");
  const [selectedLayout, setSelectedLayout] = useState("modern");

  return (
    <div className="rounded-[30px] border border-gray-200 bg-white p-6 shadow-sm">
      
      {/* HEADER */}
      <div className="border-b border-gray-100 pb-6">
        <div className="flex items-center gap-3">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
            <Palette size={28} />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Theme Settings
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Customize your instructor dashboard branding
            </p>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="mt-8 space-y-8">
        
        {/* BRAND COLOR */}
        <div>
          <div className="mb-4 flex items-center gap-2">
            <Palette size={18} className="text-gray-600" />

            <h3 className="text-lg font-bold text-gray-900">
              Brand Color
            </h3>
          </div>

          <div className="flex flex-wrap gap-4">
            {themeColors.map((color) => (
              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`relative h-14 w-14 rounded-2xl border-4 transition ${
                  selectedColor === color
                    ? "border-black scale-110"
                    : "border-white"
                }`}
                style={{ backgroundColor: color }}
              >
                {selectedColor === color && (
                  <div className="absolute inset-0 flex items-center justify-center text-white">
                    <Check size={20} />
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* LOGO UPLOAD */}
        <div>
          <div className="mb-4 flex items-center gap-2">
            <ImageIcon size={18} className="text-gray-600" />

            <h3 className="text-lg font-bold text-gray-900">
              Custom Logo
            </h3>
          </div>

          <label className="flex cursor-pointer flex-col items-center justify-center rounded-[28px] border-2 border-dashed border-gray-300 bg-gray-50 px-6 py-10 text-center transition hover:border-black hover:bg-white">
            
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-black text-white">
              <Upload size={28} />
            </div>

            <h4 className="mt-4 text-lg font-bold text-gray-900">
              Upload Instructor Logo
            </h4>

            <p className="mt-2 max-w-md text-sm leading-6 text-gray-500">
              Upload PNG, JPG, or SVG logo for your LMS branding
            </p>

            <input
              type="file"
              className="hidden"
            />
          </label>
        </div>

        {/* FONT SETTINGS */}
        <div>
          <div className="mb-4 flex items-center gap-2">
            <Type size={18} className="text-gray-600" />

            <h3 className="text-lg font-bold text-gray-900">
              Font Family
            </h3>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {fontOptions.map((font) => (
              <button
                key={font}
                onClick={() => setSelectedFont(font)}
                className={`rounded-2xl border px-5 py-4 text-left transition ${
                  selectedFont === font
                    ? "border-black bg-black text-white"
                    : "border-gray-200 bg-white text-gray-800 hover:bg-gray-50"
                }`}
                style={{ fontFamily: font }}
              >
                <p className="text-lg font-semibold">
                  {font}
                </p>

                <p className="mt-1 text-sm opacity-80">
                  Dashboard Typography
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* LAYOUT */}
        <div>
          <div className="mb-4 flex items-center gap-2">
            <LayoutTemplate size={18} className="text-gray-600" />

            <h3 className="text-lg font-bold text-gray-900">
              Dashboard Layout
            </h3>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {layoutOptions.map((layout) => (
              <button
                key={layout.id}
                onClick={() => setSelectedLayout(layout.id)}
                className={`overflow-hidden rounded-[28px] border transition ${
                  selectedLayout === layout.id
                    ? "border-black shadow-xl"
                    : "border-gray-200"
                }`}
              >
                
                {/* PREVIEW */}
                <div className="flex h-40 items-center justify-center bg-gray-100 p-4">
                  <div className="w-full rounded-2xl bg-white p-3 shadow-sm">
                    <div className="flex gap-2">
                      <div className="h-20 w-16 rounded-xl bg-gray-200" />

                      <div className="flex-1 space-y-2">
                        <div className="h-4 rounded bg-gray-200" />
                        <div className="h-4 w-2/3 rounded bg-gray-200" />
                        <div className="mt-4 h-10 rounded-xl bg-gray-100" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* INFO */}
                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <h4 className="text-lg font-bold text-gray-900">
                      {layout.title}
                    </h4>

                    {selectedLayout === layout.id && (
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white">
                        <Check size={16} />
                      </div>
                    )}
                  </div>

                  <p className="mt-2 text-sm text-gray-500">
                    Professional instructor dashboard layout
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* SAVE BUTTON */}
      <div className="mt-10 flex justify-end border-t border-gray-100 pt-6">
        <button
          className="rounded-2xl px-8 py-4 text-sm font-bold text-white transition hover:opacity-90"
          style={{ backgroundColor: selectedColor }}
        >
          Save Theme Settings
        </button>
      </div>
    </div>
  );
}