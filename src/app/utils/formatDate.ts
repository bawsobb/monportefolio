export function formatDate(date: string, includeRelative = false, locale: 'en' | 'fr' = 'fr') {
  // CORRECTIF : Si la date est undefined, null ou vide, on arrête la fonction immédiatement
  if (!date || typeof date !== 'string') {
    return ""; 
  }

  const currentDate = new Date();

  // On vérifie si le format ISO inclut déjà l'heure, sinon on ajoute minuit
  if (!date.includes("T")) {
    date = `${date}T00:00:00`;
  }

  const targetDate = new Date(date);

  // Sécurité supplémentaire : vérifier si la date est valide
  if (isNaN(targetDate.getTime())) {
    return "";
  }

  const yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
  const monthsAgo = currentDate.getMonth() - targetDate.getMonth();
  const daysAgo = currentDate.getDate() - targetDate.getDate();

  let formattedDate = "";

  if (yearsAgo > 0) {
    formattedDate = locale === 'fr' ? `il y a ${yearsAgo} an${yearsAgo > 1 ? 's' : ''}` : `${yearsAgo}y ago`;
  } else if (monthsAgo > 0) {
    formattedDate = locale === 'fr' ? `il y a ${monthsAgo} mois` : `${monthsAgo}mo ago`;
  } else if (daysAgo > 0) {
    formattedDate = locale === 'fr' ? `il y a ${daysAgo} jour${daysAgo > 1 ? 's' : ''}` : `${daysAgo}d ago`;
  } else {
    formattedDate = locale === 'fr' ? "Aujourd'hui" : "Today";
  }

  const fullDate = targetDate.toLocaleString(locale === 'fr' ? "fr-FR" : "en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  if (!includeRelative) {
    return fullDate;
  }

  return `${fullDate} (${formattedDate})`;
}