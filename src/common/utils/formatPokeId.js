export default function formatId(val) {
  return val.toLocaleString('pt-BR', {
    minimumIntegerDigits: 3,
    useGrouping: false
  });
}