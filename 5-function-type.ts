interface Car2 {
    model: string;
    year: number;
    setYear: (year: number) => void;
    setModel: (model: string) => void;
    getDescription: () => string;
}

const mustang1: Car2 = {
    model: 'Mustang',
    year: 2015,
    setYear(nextYear: number) {
        this.year = nextYear;
    },
    setModel(nextModel: string) {
        this.model = nextModel;
    },
    getDescription() {
        return `Year: ${this.year}, Model: ${this.model}`;
    }
};

mustang1.setModel('Ford');