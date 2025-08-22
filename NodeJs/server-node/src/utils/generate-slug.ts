export function generatedSlug(text: string): string {
  return text
    // 1) normaliza e remove acentos (combining marks)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    // 2) minúsculas
    .toLowerCase()
    // 3) troca qualquer coisa que NÃO seja a-z ou 0-9 por hífen
    .replace(/[^a-z0-9]+/g, "-")
    // 4) remove hífens do início/fim
    .replace(/^-+|-+$/g, "")
    // 5) fallback se ficar vazio
    || "n-a";
}
