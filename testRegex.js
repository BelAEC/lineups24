let regex = /^[A-Z][\p{L}]*(?:-[\p{L}]+)?(?:\s(?:[A-Z][\p{L}]*(?:-[\p{L}]+)?)){1,2}$/u

;    //       /^[A-Z][\p{L}]*(?:-[\p{L}]+)?(?:\s(?:[A-Z][\p{L}]*(?:-[\p{L}]+)?)){1,2}$/u



let names = [
    "Boulou St-Turd",  // Valid
    "Marie St-Petit",  // Valid
    "François-Marie Dupont", // Valid
    "José María Gómez", // Valid
    "Ely St-Petit",    // Valid
    "Anne-Marie Smith", // Valid
    "Boulou St-Turd",  // Invalid (lowercase 'st')
    "st Marie Hispat", // Invalid (first name lowercase 'st')
    "Ely St-Petit123", // Invalid (numbers)
    "José -- Marie Hispat" // Invalid (double hyphen)
];

names.forEach(name => {
    console.log(`${name}: ${regex.test(name) ? 'Match' : 'No Match'}`);
});