import ListRowHeader from "./components/header";
import SidePanel from "./components/sidePanel";

function ListRow() {
  return (
    <>
      <ListRowHeader />
      <div className="w-full overflow-x-auto">
        <table className="min-w-[900px] w-full border-collapse rounded-lg overflow-hidden">
          <thead>
            <tr className="border-b bg-gray-50 text-left text-sm text-gray-500">
              <th className="px-4 py-3 font-medium">Transacción</th>
              <th className="px-4 py-3 font-medium">Fecha y hora</th>
              <th className="px-4 py-3 font-medium">Método de pago</th>
              <th className="px-4 py-3 font-medium">ID transacción Bold</th>
              <th className="px-4 py-3 font-medium text-right">Monto</th>
            </tr>
          </thead>

          <tbody className="divide-y">
            {/* Row */}
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-3 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-gray-400" />
                <span className="text-sm text-gray-700">
                  Cobro no realizado
                </span>
              </td>

              <td className="px-4 py-3 text-sm text-gray-600">
                14/6/2024 · 16:16:00
              </td>

              <td className="px-4 py-3 text-sm text-gray-700">
                VISA •••• 6544
              </td>

              <td className="px-4 py-3 text-sm text-gray-600">GZEN8WZ8AAX9W</td>

              <td className="px-4 py-3 text-right text-sm font-medium text-gray-700">
                $ 180.000
              </td>
            </tr>

            {/* Row */}
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-3 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-green-500" />
                <span className="text-sm text-gray-700">Cobro exitoso</span>
              </td>

              <td className="px-4 py-3 text-sm text-gray-600">
                13/6/2024 · 16:16:00
              </td>

              <td className="px-4 py-3 text-sm text-gray-700">PSE</td>

              <td className="px-4 py-3 text-sm text-gray-600">GZENHP6WDV96V</td>

              <td className="px-4 py-3 text-right">
                <div className="text-sm font-medium text-gray-700">
                  $ 80.000
                </div>
                <div className="text-xs text-red-500">- $2.400</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <SidePanel />
    </>
  );
}

export default ListRow;
