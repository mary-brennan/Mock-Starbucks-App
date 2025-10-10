"use client";
import React, { useState } from "react";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Coffee } from "lucide-react";
import { Drink } from "@/app/_data/Drinks";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const DrinkForm = ({ size, drink }: { size: string; drink?: Drink }) => {
  const [calories, setCalories] = useState(drink?.md.calories || 0);

  const FormSchema = z.object({
    size: z.string().optional(),
    milk: z.string().optional(),
    shotOptions: z.string().optional(),
    shotNumber: z.number().min(0).max(8),
    sweetener: z.string().optional(),
    addIns: z.string().optional(),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      size: size,
      milk: drink?.md.milk,
      shotNumber: drink?.md.shots,
      shotOptions: drink?.md.shotOption,
      sweetener: drink?.md.sweetener,
      addIns: drink?.md.addIns,
    },
  });

  const updateFormForSize = (selectedSize: "small" | "medium" | "large") => {
    if (!drink) return;

    const sizeMap = {
      small: drink.sm,
      medium: drink.md,
      large: drink.lg,
    };

    const sizeData = sizeMap[selectedSize];

    form.setValue("size", selectedSize);
    form.setValue("milk", sizeData.milk);
    form.setValue("shotNumber", sizeData.shots);
    form.setValue("shotOptions", sizeData.shotOption);
    form.setValue("sweetener", sizeData.sweetener);
    form.setValue("addIns", sizeData.addIns);
    setCalories(sizeData.calories);
  };

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    const formattedData = `
Order Details:
━━━━━━━━━━━━━━━━━━━━
Size: ${data.size || "Not selected"}
Milk: ${data.milk || "Not selected"}
Shot Options: ${data.shotOptions || "Not selected"}
Shot Count: ${data.shotNumber}
Sweetener: ${data.sweetener || "Not selected"}
Add-Ins: ${data.addIns || "Not selected"}
━━━━━━━━━━━━━━━━━━━━
    `;
    alert(formattedData);
  };

  return (
    <div className="pl-32 pr-10 pt-8">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="md:flex pb-10 xs:flex-col">
            <div className="flex-grow md:max-w-1/4 md:mr-[88px]">
              <h1 className="text-2xl ml-2 border-b-4 pb-3">Choose a Size</h1>
              <FormField
                control={form.control}
                name="size"
                render={({ field }) => (
                  <FormItem className="py-4 px-2">
                    <FormControl>
                      <div className="flex items-end justify-evenly">
                        <Button
                          type="button"
                          className={`p-2 bg-transparent hover:bg-green-50 hover:border-green-600 text-black rounded-lg h-auto ${
                            field.value === "small"
                              ? "border-2 border-green-600 bg-green-50"
                              : "border-2 border-transparent"
                          }`}
                          onClick={() => updateFormForSize("small")}
                        >
                          <div className="flex flex-col items-center gap-2">
                            <div className="rounded-full p-2 border-2">
                              <Coffee className="w-8 h-8" />
                            </div>
                            <span className="font-bold text-sm">SM</span>
                            <span className="text-sm">12oz</span>
                          </div>
                        </Button>
                        <Button
                          type="button"
                          className={`p-2 bg-transparent hover:bg-green-50 hover:border-green-600 text-black rounded-lg h-auto ${
                            field.value === "medium"
                              ? "border-2 border-green-600 bg-green-50"
                              : "border-2 border-transparent"
                          }`}
                          onClick={() => updateFormForSize("medium")}
                        >
                          <div className="flex flex-col items-center gap-2">
                            <div className="rounded-full p-2 border-2">
                              <Coffee className="w-12 h-12 " />
                            </div>
                            <span className="font-bold text-sm">MED</span>
                            <span className="text-sm">16oz</span>
                          </div>
                        </Button>
                        <Button
                          type="button"
                          className={`p-2 hover:bg-green-50 bg-transparent hover:border-green-600 text-black rounded-lg h-auto ${
                            field.value === "large"
                              ? "border-2 border-green-600 bg-green-50"
                              : "border-2 border-transparent"
                          }`}
                          onClick={() => updateFormForSize("large")}
                        >
                          <div className="flex flex-col items-center gap-2">
                            <div className="rounded-full p-2 border-2">
                              <Coffee className="w-16 h-16" />
                            </div>
                            <span className="font-bold text-sm">LG</span>
                            <span className="text-sm">24oz</span>
                          </div>
                        </Button>
                      </div>
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <div className="flex-grow md:max-w-1/4  md:ml-[88px]">
              <h1 className="text-2xl ml-2 border-b-4  pb-3">
                What&apos;s Included ({calories} Cal)
              </h1>
              <FormField
                control={form.control}
                name="milk"
                render={({ field }) => (
                  <FormItem className="py-4 px-2">
                    <FormLabel className="text-sm">Milk</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl className="md:w-4/5 sm:w-5/6  py-6">
                        <SelectTrigger className="text-lg !bg-white">
                          <SelectValue placeholder="This will be a default value" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="text-lg">
                        <SelectItem className="text-lg" value="2% Milk">
                          2% Milk
                        </SelectItem>
                        <SelectItem value="Protein-boosted Milk">
                          Protein-boosted Milk
                        </SelectItem>
                        <SelectItem value="Almond">Almond</SelectItem>
                        <SelectItem value="Coconut">Coconut</SelectItem>
                        <SelectItem value="Oatmilk">Oatmilk</SelectItem>
                        <SelectItem value="Whole Milk">Whole Milk</SelectItem>

                        <SelectItem value="Nonfat Milk">Nonfat Milk</SelectItem>
                        <SelectItem value="Half and Half">
                          Half and Half
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="shotOptions"
                render={({ field }) => (
                  <FormItem className="py-4 px-2">
                    <FormLabel className="text-sm">Shot Options</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl className="md:w-4/5 sm:w-5/6 py-6">
                        <SelectTrigger className="!bg-white">
                          <SelectValue placeholder="This will be a default value" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Blonde Espresso">
                          Blonde Espresso
                        </SelectItem>
                        <SelectItem value="Signature Espresso">
                          Signature Espresso
                        </SelectItem>
                        <SelectItem value="Decaf Espresso">
                          Decaf Espresso
                        </SelectItem>
                        <SelectItem value="None">None</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="shotNumber"
                render={({ field }) => (
                  <FormItem className="py-4 px-2 ">
                    <FormLabel className="text-sm">Shot Count</FormLabel>
                    <FormControl className="md:w-4/5 sm:w-5/6 py-6">
                      <div className="flex justify-between items-center gap-2 !bg-white border rounded-md px-3 py-2 h-9 focus-within:border-green-600 w-fit shadow-xs">
                        <div className="text-lg ">Shots</div>
                        <div className="flex items-center gap-1">
                          <Button
                            type="button"
                            variant="outline"
                            className="text-xl hover:bg-green-600 hover:text-white border-2 px-2"
                            onClick={() => {
                              const newValue = Math.max(
                                0,
                                (field.value || 0) - 1
                              );
                              field.onChange(newValue);
                            }}
                            disabled={field.value <= 0}
                          >
                            -
                          </Button>
                          <span className="w-6 font-2xl text-center font-medium">
                            {field.value || 0}
                          </span>
                          <Button
                            type="button"
                            variant="outline"
                            className="text-xl px-2  hover:bg-green-600 hover:text-white border-2"
                            onClick={() => {
                              const newValue = Math.min(
                                8,
                                (field.value || 0) + 1
                              );
                              field.onChange(newValue);
                            }}
                            disabled={field.value >= 8}
                          >
                            +
                          </Button>
                        </div>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="sweetener"
                render={({ field }) => (
                  <FormItem className="py-4 px-2">
                    <FormLabel className="text-sm">Sweetener</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl className="md:w-4/5 sm:w-5/6 py-6">
                        <SelectTrigger className="!bg-white">
                          <SelectValue placeholder="This will be a default value" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Sugar">Sugar</SelectItem>
                        <SelectItem value="Stevia">Stevia</SelectItem>
                        <SelectItem value="Splenda">Splenda</SelectItem>
                        <SelectItem value="Classic Syrup">
                          Classic Syrup
                        </SelectItem>
                        <SelectItem value="Vanilla Sugar-Free Syrup">
                          Vanilla Sugar-Free Syrup
                        </SelectItem>
                        <SelectItem value="Vanilla Syrup">
                          Vanilla Syrup
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="addIns"
                render={({ field }) => (
                  <FormItem className="py-4 px-2">
                    <FormLabel className="text-sm">Add-Ins</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl className="md:w-4/5 sm:w-5/6 py-6">
                        <SelectTrigger className="!bg-white">
                          <SelectValue placeholder="This will be a default value" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="No Ice">No Ice</SelectItem>
                        <SelectItem value="Ice">Ice</SelectItem>
                        <SelectItem value="Extra-Ice">Extra-Ice</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="flex justify-center pb-8">
            <Button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full text-lg"
            >
              Add to Cart
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default DrinkForm;
