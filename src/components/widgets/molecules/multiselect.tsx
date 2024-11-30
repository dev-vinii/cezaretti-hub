import * as React from "react";
import { Check, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Command, CommandItem, CommandList } from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

type MultiSelectProps = {
  options: { value: string; label: string }[];
  selectedValues: string[];
  onSelect: (values: string[]) => void;
  placeholder: string;
};

export function MultiSelect({
  options,
  selectedValues = [],
  onSelect,
  placeholder,
}: MultiSelectProps) {
  const [open, setOpen] = React.useState(false);

  const handleSelect = (value: string) => {
    const isSelected = selectedValues?.includes(value);

    if (isSelected) {
      onSelect(selectedValues.filter((v) => v !== value));
      return;
    }

    onSelect([...selectedValues, value]);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button className="flex h-10 flex-1 items-center justify-between rounded-md border bg-white px-3 py-2 text-sm">
          {selectedValues?.length > 0
            ? selectedValues
                .map(
                  (value) =>
                    options.find((option) => option.value === value)?.label,
                )
                .join(", ")
            : placeholder}
          <ChevronDown className="h-4 w-4 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[--radix-popover-trigger-width] bg-white p-0">
        <Command>
          <CommandList>
            {options?.map((option) => (
              <CommandItem
                key={option.value}
                className="flex items-center px-4 py-2 hover:bg-gray-100"
                onSelect={() => handleSelect(option.value)}
              >
                {selectedValues?.includes(option.value) && (
                  <Check className="h-4 w-4" />
                )}
                <span>{option.label}</span>
              </CommandItem>
            ))}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
