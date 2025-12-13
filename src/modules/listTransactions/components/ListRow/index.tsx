import ListRowHeader from "./components/header";
import TransactionTable from "./components/rows";
import InputSearch from "./components/search";
import { className } from "./style";

function ListRow() {
  return (
    <div className={className.container}>
      <ListRowHeader />
      <InputSearch />
      <TransactionTable />
    </div>
  );
}

export default ListRow;
