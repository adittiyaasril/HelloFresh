"use client";
import React from "react";
import { Select, SelectSection, SelectItem } from "@nextui-org/select";
import { Button } from "@nextui-org/button";
import { siteConfig } from "@/config/site";

export const Homepage = () => {
  return (
    <div>
      <div>
        <Select
          label="How many people are you cooking for?"
          placeholder="Choose..."
          labelPlacement="outside"
          className="max-w-full py-4"
        >
          {siteConfig.People.map((item) => (
            <SelectItem key={item.label} value={item.label}>
              {item.label}
            </SelectItem>
          ))}
        </Select>
        <Select
          label="Whats your cooking style?"
          placeholder="Choose..."
          labelPlacement="outside"
          className="max-w-full py-4"
        >
          {siteConfig.Cooking.map((item) => (
            <SelectItem key={item.label} value={item.label}>
              {item.label}
            </SelectItem>
          ))}
        </Select>
        <Select
          label="Choose your favorite cuisine?"
          placeholder="Choose..."
          labelPlacement="outside"
          className="max-w-full py-4"
        >
          {siteConfig.FavoriteCuisine.map((item) => (
            <SelectItem key={item.label} value={item.label}>
              {item.label}
            </SelectItem>
          ))}
        </Select>
      </div>
      <div className="flex justify-center">
        <Button className="px-8 py-3 bg-lime-500 text-white">
          Generate plan
        </Button>
      </div>
    </div>
  );
};
