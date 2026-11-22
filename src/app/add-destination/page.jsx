
"use client";
import {
  Button,
  FieldError,
  Input,
  Label,
  ListBox,
  TextArea,
  TextField,
  Select,
} from "@heroui/react";

const AddDestinationForm = () => {
  const categories = [
    "Beach",
    "Mountain",
    "City",
    "Adventure",
    "Cultural",
    "Luxury",
  ];

  return (
    <div className="min-h-screen font-body w-full bg-slate-50 px-3 py-6 sm:px-6 sm:py-10 dark:bg-black">
      <div className="mx-auto w-full max-w-5xl">

        {/* Page Header */}
        <div className="mb-6 sm:mb-8">
          <p className="mb-2  text-xs font-semibold uppercase tracking-[0.25em] text-[#00B8DB]">
            VAYORA / Travel Management
          </p>

          <h1 className="text-2xl font-body font-bold tracking-tight text-[#001339] sm:text-3xl dark:text-white">
            Add New Destination
          </h1>

          <p className="mt-2 text-sm text-slate-500 sm:text-base dark:text-slate-400">
            Add a new destination and create unforgettable travel
            experiences for your customers.
          </p>
        </div>

        {/* Form Card */}
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-white/10 dark:bg-[#080F20]">

          {/* Colored Form Heading */}
          <div className="bg-[#00B8DB] px-5 py-6 sm:px-8 sm:py-7">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-xl font-body font-bold text-black/90 sm:text-2xl">
                  Destination Information
                </h2>

                <p className="mt-1 text-sm text-black/90">
                  Enter the details to publish your destination.
                </p>
              </div>

              <span className="w-fit rounded-full border border-black/40 bg-white/30 px-4 py-1.5 text-xs font-semibold text-black/80">
                NEW DESTINATION
              </span>
            </div>
          </div>

          <form className="space-y-7 p-5 sm:p-8">

            {/* Basic Information */}
            <section>
              <div className="mb-5">
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#001339] dark:text-white">
                  Basic Information
                </h3>
                <div className="mt-2 h-0.5 w-12 rounded-full bg-[#00B8DB]" />
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">

                {/* Destination Name */}
                <div className="sm:col-span-2">
                  <TextField name="destinationName" isRequired>
                    <Label>Destination Name</Label>
                    <Input
                      placeholder="e.g. Bali Paradise"
                      className="rounded-xl"
                    />
                    <FieldError />
                  </TextField>
                </div>

                {/* Country */}
                <TextField name="country" isRequired>
                  <Label>Country</Label>
                  <Input
                    placeholder="e.g. Indonesia"
                    className="rounded-xl"
                  />
                  <FieldError />
                </TextField>

                {/* Category */}
                <div>
                  <Select
                    name="category"
                    isRequired
                    className="w-full"
                    placeholder="Select category"
                  >
                    <Label>Category</Label>

                    <Select.Trigger className="rounded-xl">
                      <Select.Value />
                      <Select.Indicator />
                    </Select.Trigger>

                    <Select.Popover>
                      <ListBox>
                        {categories.map((category) => (
                          <ListBox.Item
                            key={category}
                            id={category}
                            textValue={category}
                          >
                            {category}
                            <ListBox.ItemIndicator />
                          </ListBox.Item>
                        ))}
                      </ListBox>
                    </Select.Popover>
                  </Select>
                </div>

              </div>
            </section>

            <div className="h-px bg-slate-100 dark:bg-white/10" />

            {/* Package Details */}
            <section>
              <div className="mb-5">
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#001339] dark:text-white">
                  Package Details
                </h3>
                <div className="mt-2 h-0.5 w-12 rounded-full bg-[#00B8DB]" />
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">

                {/* Price */}
                <TextField name="price" type="number" isRequired>
                  <Label>Price (USD)</Label>
                  <Input
                    type="number"
                    placeholder="1299"
                    className="rounded-xl"
                  />
                  <FieldError />
                </TextField>

                {/* Duration */}
                <TextField name="duration" isRequired>
                  <Label>Duration</Label>
                  <Input
                    placeholder="7 Days / 6 Nights"
                    className="rounded-xl"
                  />
                  <FieldError />
                </TextField>

                {/* Departure Date */}
                <div className="sm:col-span-2">
                  <TextField name="departureDate" type="date" isRequired>
                    <Label>Departure Date</Label>
                    <Input
                      type="date"
                      className="rounded-xl"
                    />
                    <FieldError />
                  </TextField>
                </div>

              </div>
            </section>

            <div className="h-px bg-slate-100 dark:bg-white/10" />

            {/* Media & Description */}
            <section>
              <div className="mb-5">
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#001339] dark:text-white">
                  Media & Description
                </h3>
                <div className="mt-2 h-0.5 w-12 rounded-full bg-[#00B8DB]" />
              </div>

              <div className="space-y-5">

                {/* Image URL */}
                <TextField name="imageUrl" isRequired>
                  <Label>Destination Image URL</Label>
                  <Input
                    type="url"
                    placeholder="https://example.com/destination.jpg"
                    className="rounded-xl"
                  />
                  <FieldError />
                </TextField>

                {/* Description */}
                <TextField name="description" isRequired>
                  <Label>Description</Label>
                  <TextArea
                    placeholder="Describe the destination, attractions and travel experience..."
                    className="min-h-32 rounded-xl"
                  />
                  <FieldError />
                </TextField>

              </div>
            </section>

            {/* Form Actions */}
            <div className="flex font-ui flex-col-reverse gap-3 border-t border-slate-100 pt-6 sm:flex-row sm:justify-end dark:border-white/10">

              <Button
                type="reset"
                variant="outline"
                className="rounded-full p-2 text-black hover:bg-gray-100 dark:text-white dark:hover:bg-white/10 sm:px-6 sm:py-3"
              >
                Reset Form
              </Button>

              <Button
                type="submit"
                className="rounded-full p-2 text-white bg-black hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 sm:px-6 sm:py-3"
              >
                Add Destination
              </Button>

            </div>

          </form>
        </div>

        {/* Footer */}
        <p className="mt-5 text-center text-xs tracking-wide text-slate-400">
          VAYORA · Discover Beyond Boundaries
        </p>

      </div>
    </div>
  );
};

export default AddDestinationForm;
