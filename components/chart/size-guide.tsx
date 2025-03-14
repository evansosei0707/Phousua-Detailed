"use client"

import { Ruler } from "lucide-react"
import { useState } from "react"

export function SizeGuide() {
  const [showSizeGuide, setShowSizeGuide] = useState(false)

  const toggleSizeGuide = () => {
    setShowSizeGuide(!showSizeGuide)
  }

  return (
    <>
      {/* Size Guide Button */}
      <button
        onClick={toggleSizeGuide}
        className="mb-4 flex items-center gap-1 text-sm underline hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
      >
        <span className=" font-medium text-lg">Size Guide</span> <Ruler />
      </button>

      {/* Size Guide Modal */}
      {showSizeGuide && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg max-w-2xl w-full max-h-screen overflow-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-medium">
                Phosua Detailed Size Chart
              </h2>
              <button
                onClick={toggleSizeGuide}
                className="text-gray-500 hover:text-gray-800 dark:hover:text-gray-300"
              >
                ✕
              </button>
            </div>

            {/* Size Chart Table */}
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-700">
                    <th className="border border-gray-300 dark:border-gray-600 p-2">
                      UK
                    </th>
                    <th
                      className="border border-gray-300 dark:border-gray-600 p-2"
                      colSpan={2}
                    >
                      Small
                    </th>
                    <th
                      className="border border-gray-300 dark:border-gray-600 p-2"
                      colSpan={2}
                    >
                      Medium
                    </th>
                    <th
                      className="border border-gray-300 dark:border-gray-600 p-2"
                      colSpan={2}
                    >
                      Large
                    </th>
                    <th
                      className="border border-gray-300 dark:border-gray-600 p-2"
                      colSpan={2}
                    >
                      Extra Large
                    </th>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-700 dark:bg-gray-750">
                    <th className="border border-gray-300 dark:border-gray-600 p-2"></th>
                    <th className="border border-gray-300 dark:border-gray-600 p-2">
                      Size 8
                    </th>
                    <th className="border border-gray-300 dark:border-gray-600 p-2">
                      Size 10
                    </th>
                    <th className="border border-gray-300 dark:border-gray-600 p-2">
                      Size 12
                    </th>
                    <th className="border border-gray-300 dark:border-gray-600 p-2">
                      Size 14
                    </th>
                    <th className="border border-gray-300 dark:border-gray-600 p-2">
                      Size 16
                    </th>
                    <th className="border border-gray-300 dark:border-gray-600 p-2">
                      Size 18
                    </th>
                    <th className="border border-gray-300 dark:border-gray-600 p-2">
                      Size 20
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    <td className="border border-gray-300 dark:border-gray-600 p-2 font-medium">
                      Bust
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 p-2 text-center">
                      34
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 p-2 text-center">
                      36
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 p-2 text-center">
                      38
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 p-2 text-center">
                      40
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 p-2 text-center">
                      42
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 p-2 text-center">
                      44
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 p-2 text-center">
                      46
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    <td className="border border-gray-300 dark:border-gray-600 p-2 font-medium">
                      Waist
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 p-2 text-center">
                      27
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 p-2 text-center">
                      29
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 p-2 text-center">
                      31
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 p-2 text-center">
                      33
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 p-2 text-center">
                      35
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 p-2 text-center">
                      37
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 p-2 text-center">
                      39
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    <td className="border border-gray-300 dark:border-gray-600 p-2 font-medium">
                      Hip
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 p-2 text-center">
                      38
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 p-2 text-center">
                      40
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 p-2 text-center">
                      42
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 p-2 text-center">
                      44
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 p-2 text-center">
                      46
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 p-2 text-center">
                      48
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 p-2 text-center">
                      50
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
              <p>All measurements are in inches.</p>
              <p>
                For the best fit, we recommend measuring yourself and referring
                to the size chart above.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
