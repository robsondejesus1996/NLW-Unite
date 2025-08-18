import { Search, MoreHorizontal, ChevronsLeft, ChevronLeft, ChevronRight, ChevronsRight } from 'lucide-react';

export function AttendeeList() {
  return (
    <div className="flex flex-col gap-4">

      <div className="flex gap-3 items-center">
        <h1 className="text-2xl font-bold">Participantes</h1>
        <div className="px-3 w-72 py-1.5 border border-white/10 rounded-lg flex items-center gap-3">
          <Search className="size-4 text-emerald-300" />
          <input
            className="bg-transparent focus:ring-0 flex-1 outline-none border-0 p-0 text-sm"
            placeholder="Buscar participante..."
          />
        </div>
      </div>


      <div className="border border-white/10 rounded-lg">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10">
              <th style={{ width: 48 }} className="py-3 px-2.5 text-sm font-semibold text-left">
                <input type="checkbox" className='size-4 bg-black/20 rounded border border-white/10 accent-orange-400'/>
              </th>
              <th className="py-3 px-2.5 text-sm font-semibold text-left">Código</th>
              <th className="py-3 px-2.5 text-sm font-semibold text-left">Participante</th>
              <th className="py-3 px-2.5 text-sm font-semibold text-left">Data Inscrição</th>
              <th className="py-3 px-2.5 text-sm font-semibold text-left">Check-in</th>
              <th style={{ width: 64 }} className="py-3 px-2.5 text-sm font-semibold text-left"></th>
            </tr>
          </thead>

          <tbody>
            {Array.from({ length: 8 }).map((_, i) => {
              return (
                <tr key={i} className='border-b border-white/10 hover:bg-white/10'>
                  <td className="py-3 px-2.5 text-sm">
                    <input type="checkbox" className='size-4 bg-black/20 rounded border border-white/10 accent-orange-400'/>
                  </td>
                  <td className="py-3 px-2.5 text-sm">123</td>
                  <td className="py-3 px-2.5 text-sm">
                    <div className="flex flex-col">
                      <span>Diego Fer</span>
                      <span className="text-xs text-white/60">diego@gmail</span>
                    </div>
                  </td>
                  <td className="py-3 px-2.5 text-sm">7 dias atrás</td>
                  <td className="py-3 px-2.5 text-sm">3 dias atrás</td>
                  <td className="py-3 px-2.5 text-sm">
                    <button className="bg-black/20 border border-white/10 rounded-md p-1.5 ">
                      <MoreHorizontal className="size-4" />
                    </button>
                  </td>
                </tr>
              )
            })}


          </tbody>

          <tfoot>
            <tr>
              <td className="py-3 px=2.5 text-sm text-zinc-380" colSpan={3} >
                Mostrando 10 de 228 itens
              </td>
              <td className="py-3 px=2.5 text-sm text-zinc-380 text-right" colSpan={3} >

                <div className='inline-flex items-center gap-8'>
                  <span>Página 1 de 23</span>

                  <div className='flex gap-1.5'>
                  <button className="bg-white/10 border border-white/10 rounded-md p-1.5 ">
                    <ChevronsLeft className="size-4" />
                  </button>

                  <button className="bg-white/10 border border-white/10 rounded-md p-1.5 ">
                    <ChevronLeft className="size-4" />
                  </button>

                  <button className="bg-white/10 border border-white/10 rounded-md p-1.5 ">
                    <ChevronRight className="size-4" />
                  </button>

                  <button className="bg-white/10 border border-white/10 rounded-md p-1.5 ">
                    <ChevronsRight className="size-4" />
                  </button>
                </div>

                </div>
                
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
