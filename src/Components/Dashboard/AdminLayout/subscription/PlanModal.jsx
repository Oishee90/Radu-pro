/* eslint-disable react/prop-types */
import React from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { X } from "lucide-react";

const PlanModal = ({ isOpen, onClose, plan }) => {
  const isEdit = !!plan;

  const { register, handleSubmit, reset } = useForm({
    defaultValues: isEdit
      ? {
          name: plan.name,
          description: plan.description,
          price: plan.price,
          billingCycle: plan.billingCycle,
        }
      : {
          name: "",
          description: "",
          price: 0,
          billingCycle: "N/A (Free)",
        },
  });

  // Reset form when modal opens (for create)
  React.useEffect(() => {
    if (isOpen) {
      reset(
        isEdit
          ? {
              name: plan.name,
              description: plan.description,
              price: plan.price,
              billingCycle: plan.billingCycle,
            }
          : {
              name: "",
              description: "",
              price: 0,
              billingCycle: "N/A (Free)",
            }
      );
    }
  }, [isOpen, plan, reset, isEdit]);

  const onSubmit = (data) => {
    if (isEdit) {
      console.log("Updated plan:", data);
    } else {
      console.log("Created new plan:", data);
    }
    onClose();
  };

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.95, y: 20 }}
        className="bg-white rounded-lg shadow-xl max-w-md w-full p-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex gap-5 justify-between items-center mb-6">
          <div className="flex justify-between items-center flex-1">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">
                {isEdit ? plan.name : "Free Plan"}
              </h2>
              <p className="text-sm text-gray-500 mt-2">
                Basic access with limited features
              </p>
            </div>
            <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
              Default
            </span>
          </div>

          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Plan Name
            </label>
            <input
              {...register("name", { required: true })}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-600 focus:border-orange-600"
              placeholder="e.g. Free Plan"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              {...register("description")}
              rows={2}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-600 focus:border-orange-600 resize-none"
              placeholder="Short description of the plan"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Price
            </label>
            <input
              {...register("price", { valueAsNumber: true })}
              type="number"
              step="0.01"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-600 focus:border-orange-600"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Billing Cycle
            </label>
            <select
              {...register("billingCycle")}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-600 focus:border-orange-600"
            >
              <option>N/A (Free)</option>
              <option>monthly</option>
              <option>yearly</option>
            </select>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 border border-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-50 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-orange-600 text-white font-medium rounded-md hover:bg-orange-700 transition"
            >
              {isEdit ? "Save Changes" : "Create Plan"}
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default PlanModal;
