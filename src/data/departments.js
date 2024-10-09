export  const departments = [
    "Sales",
    "Marketing",
    "Engineering",
    "Human Resources",
    "Legal"
];

export const optionsDepartements = departments.map((departement) => ({
    value: departement,
    label: departement
}))