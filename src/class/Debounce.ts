function _debounce() {
  let timer = null;
  let can = true;
  return {
    start: (func = () => {}, delay = 500) => {
      if (can === true) {
        can = false;
        timer = setTimeout(() => {
          can = true;
        }, delay);
        func();
      } else {
        console.error("Debounce", "need wait some time");
      }
    },
  };
}

const Debounce = _debounce();
export default Debounce;
