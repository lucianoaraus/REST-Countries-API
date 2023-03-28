import {
  Select,
  SelectItem,
  SelectPopover,
  useSelectState,
} from "ariakit/select";

import { regions } from "../../utils/countries";

import styles from "./styles.module.scss";

function FilterSelect({ callBack }) {
  const select = useSelectState({
    defaultValue: "Filter by Region",
    sameWidth: true,
    gutter: 4,
  });

  return (
    <div className={styles.wrapper}>
      <Select state={select} className={styles.select} />
      <SelectPopover
        state={select}
        className={styles.popover}
        onClick={(e) => callBack(e.target.innerText)}
      >
        {regions.map((region) => {
          return (
            <SelectItem
              key={region}
              value={region}
              className={styles.selectItem}
            >
              {region}
            </SelectItem>
          );
        })}
      </SelectPopover>
    </div>
  );
}

export default FilterSelect;
