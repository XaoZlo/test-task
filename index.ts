const MAP: Record<string, string> = {
    medication_id: 'prescription_id',
    display_name: 'drug_name',
    directions: 'instructions',
    notes: 'instructions',
    quantity: 'dispense',
};

export interface IPrescription {
    prescription_id: number
    drug_name: string
    strength: string
    route: string
    instructions: string
    dispense: number
}

// @ts-ignore
const x = (medication: IMedication): IPrescription =>
    Object.keys(medication).reduce(
        (y, z) => ({
            ...y,
            [MAP[z] != null ? MAP[z] : z]: medication[z as keyof IMedication],
        }),
        {} as IPrescription,
    );


interface IMedication {
    medication_id: number,
    display_name: string
    strength: string
    route: string
    directions: string
    quantity: number
    test: string
}

const medication: IMedication = {
    medication_id: 12345,
    display_name: 'Lipitor',
    strength: '20 mg',
    route: 'by mouth',
    directions: 'Take 1 tablet daily',
    quantity: 30,
    test: 'test'
};
const result = x(medication);
