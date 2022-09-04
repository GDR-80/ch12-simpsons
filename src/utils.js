export function findById(id, data) {
  return data.findIndex((item) => item.id === id);
}

export function calcTotalLikes(data) {
  let total = 0;
  data.forEach((item) => {
    if (item.liked === true) {
      total += 1;
    }
  });

  return total;
}
