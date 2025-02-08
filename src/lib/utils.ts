import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function generateRandomFloat(start: number, end: number, oldValue: number, maxStepSize: number): number {
  // Ensure start is less than end
  if (start > end) [start, end] = [end, start];

  // Calculate maximum possible change
  const maxChange = Math.min(maxStepSize, Math.abs(end - start));

  // Calculate the range for the new value based on maxStepSize
  const minNewValue = Math.max(start, oldValue - maxChange);
  const maxNewValue = Math.min(end, oldValue + maxChange);

  // Generate random value within the constrained range
  return minNewValue + Math.random() * (maxNewValue - minNewValue);
}

export async function livelyRandomGenerator() {

  const props = await fetch('LivelyProperties.json').then((r) => r.json()).then((data) => {
    const keys = Object.keys(data);

    return keys.map((key) => {
      const obj = data[key];
      if (obj.type == "label") return null; // skip labels
      if (obj.type == "folderDropdown") {
        return {
          key: key,
          value: obj.folder + "\\" + obj.value,
        }
      }
      return {
        key: key,
        value: obj.value,
      }
    }).filter((a) => a != null)
  })

  // Set properties (theme settings)
  props.forEach((a) => {
    // @ts-expect-error: Is okay
    window.livelyPropertyListener(a.key, a.value)
  })

  console.log("If you want to start devmode, run:")
  console.log("window.livelyPropertyListener(\"devtools-enabled\", true)")


  // update usage chart
  const sysInfo = {
    NameCpu: "AMD Ryzen 7 7700X 8-Core Processor",
    NameGpu: "AMD Radeon(TM) Graphics",
    NameNetCard: "Realtek Gaming 2.5GbE Family Controller",
    CurrentCpu: 50,
    CurrentGpu3D: 22.2213,
    CurrentRamAvail: 11102,
    CurrentNetDown: 4802.12345,
    CurrentNetUp: 4802.12345,
    TotalRam: 32768,
  }


  const loop = setInterval(() => {
    // @ts-expect-error: Is okay
    window.livelySystemInformation(JSON.stringify({
      NameCpu: "AMD Ryzen 7 7700X 8-Core Processor",
      NameGpu: "AMD Radeon(TM) Graphics",
      NameNetCard: "Realtek Gaming 2.5GbE Family Controller",
      CurrentCpu: generateRandomFloat(0, 100, sysInfo.CurrentCpu, 10),
      CurrentGpu3D: generateRandomFloat(0, 100, sysInfo.CurrentGpu3D, 10),
      CurrentRamAvail: Math.round(generateRandomFloat(2000, 32768, sysInfo.CurrentRamAvail, 1000)),
      CurrentNetDown: generateRandomFloat(0, 1000000, sysInfo.CurrentNetDown, 100000),
      CurrentNetUp: generateRandomFloat(0, 1000000, sysInfo.CurrentNetDown, 100000),
      TotalRam: 32768,
    }))

  }, 1000)

  return () => { clearInterval(loop) }
}

export function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}