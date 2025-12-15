import Skeleton from "@/components/Skeleton";
import { memo } from "react";

function TableSkeleton() {
  return (
    <tr className="bg-gray-50">
      <td className="py-3 px-2">
        <Skeleton className="w-50" />
      </td>
      <td className="py-3 px-2">
        <Skeleton className="w-50" />
      </td>
      <td className="py-3 px-2">
        <Skeleton className="w-50" />
      </td>
      <td className="py-3 px-2">
        <Skeleton className="w-50" />
      </td>
      <td className="py-3 px-2">
        <Skeleton className="w-50" />
      </td>
    </tr>
  );
}

export default memo(TableSkeleton);
