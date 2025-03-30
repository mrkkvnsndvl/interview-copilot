import {
  HelpCircleIcon,
  KeyIcon,
  MonitorIcon,
  MoonIcon,
  SunIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/settings")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <section className="flex flex-row p-6 gap-x-3">
        <div className="flex flex-col w-full gap-y-3">
          <h3 className="text-base font-medium">Job Position</h3>
          <Input
            className="px-3 py-6 placeholder:text-base"
            placeholder="Enter job position"
          />
        </div>
        <div className="flex flex-col w-full gap-y-3">
          <div className="flex flex-row gap-x-2">
            <h3 className="text-base font-medium">Model</h3>
            <div className="flex flex-row items-center gap-x-1">
              <HelpCircleIcon className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm font-medium text-muted-foreground">
                AI models process answers
              </span>
            </div>
          </div>
          <Select>
            <SelectTrigger className="w-full px-3 py-6 cursor-pointer">
              <SelectValue placeholder="Select a model" />
            </SelectTrigger>
            <SelectContent className="h-54">
              <SelectGroup>
                <SelectLabel>Models</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </section>
      <Separator />
      <section className="flex flex-col p-6 gap-y-3">
        <h3 className="text-base font-medium">API Key</h3>
        <div className="flex flex-row gap-x-3">
          <Input
            className="px-3 py-6 placeholder:text-base"
            placeholder="Enter API key"
          />
          <Button className="p-6 cursor-pointer" variant="default">
            <KeyIcon className="w-6 h-6" />
            Set API key
          </Button>
        </div>
        <div className="flex flex-col gap-y-2">
          <h3>How to get an API key?</h3>
          <ul className="flex flex-col gap-y-1">
            <li className="text-sm">
              1. Sign up for an account at the OpenRouter website
            </li>
            <li className="text-sm">
              2. Navigate to the API keys section in your account dashboard and
              create an API key
            </li>
            <li className="text-sm">
              3. Copy and paste the key into the field above
            </li>
          </ul>
        </div>
      </section>
      <Separator />
      <section className="flex flex-row items-center h-[66px] px-6 py-3">
        <h3 className="text-base font-medium text-nowrap">
          Personalize Settings
        </h3>
        <Separator className="mx-2" orientation="vertical" />
        <div className="flex flex-row w-full gap-x-3">
          <div className="flex flex-row gap-x-1.5 flex-1/2 items-center">
            <h4 className="text-sm font-medium">Transparency</h4>
            <Slider
              className="cursor-grab"
              defaultValue={[0]}
              max={100}
              step={1}
            />
          </div>
          <div className="flex flex-row border border-border">
            <div className="flex flex-col p-2 bg-black cursor-pointer">
              <MonitorIcon className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col p-2 bg-white cursor-pointer">
              <SunIcon className="w-6 h-6 text-black" />
            </div>
            <div className="flex flex-col p-2 bg-black cursor-pointer">
              <MoonIcon className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      </section>
      <Separator />
    </>
  );
}
