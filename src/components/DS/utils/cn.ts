import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combina clases de Tailwind CSS de forma segura, evitando conflictos
 * y permitiendo sobrescribir clases cuando sea necesario.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

