const pad = (n) => {
  const str = n.toString();
  return str.length === 2 ? str : '0' + str;
};

export const days = [];

for (let i = 1; i < 32; i++) {
  days.push({
    value: i,
    label: pad(i),
  });
}

export const months = [];

for (let i = 0; i < 12; i++) {
  months.push({
    value: i,
    label: pad(i + 1),
  });
}

export const years = [];

const year = new Date().getFullYear();

for (let i = 0; i < 100; i++) {
  years.push({
    value: year - i,
    label: year - i,
  });
}
