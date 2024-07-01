const isPrime = (n: number): Promise<{ prime: boolean }> => {
    return new Promise((resolve, reject) => {
        if (n <= 1) {
            reject({ prime: false });
            return;
        }

        for (let i = 2, s = Math.sqrt(n); i <= s; i++) {
            if (n % i === 0) {
                reject({ prime: false });
                return;
            }
        }

        resolve({ prime: true });
    });
};

export const testIsPrime = (num: number) => {
    isPrime(num)
        .then(console.log)
        .catch(console.error);
};





const isPrimeAsync = async (n: number): Promise<{ prime: boolean }> => {
    return new Promise((resolve, reject) => {
        if (n <= 1) {
            reject({ prime: false });
            return;
        }

        for (let i = 2, s = Math.sqrt(n); i <= s; i++) {
            if (n % i === 0) {
                reject({ prime: false });
                return;
            }
        }

        resolve({ prime: true });
    });
};



export const testIsPrimeAsync = async (num: number) => {
    const result = await isPrimeAsync(num);
    try {
        console.log(result)
    } catch (error) {
        console.log(error);
    }
};




