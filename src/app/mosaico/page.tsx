import DashboardLayout from '../components/DashboardLayout';

export default function Mosaico() {
  const equipamentos = [
    { id: 'EQ-001', nome: 'Servidor Principal', status: 'online', temperatura: '42°C', cpu: '78%', memoria: '65%' },
    { id: 'EQ-002', nome: 'Switch Core', status: 'online', temperatura: '38°C', cpu: '45%', memoria: '32%' },
    { id: 'EQ-003', nome: 'Firewall', status: 'warning', temperatura: '55°C', cpu: '89%', memoria: '78%' },
    { id: 'EQ-004', nome: 'Storage NAS', status: 'online', temperatura: '41°C', cpu: '23%', memoria: '56%' },
    { id: 'EQ-005', nome: 'UPS Principal', status: 'offline', temperatura: '--', cpu: '--', memoria: '--' },
    { id: 'EQ-006', nome: 'Ar Condicionado', status: 'online', temperatura: '22°C', cpu: '67%', memoria: '45%' },
    { id: 'EQ-007', nome: 'Sensor Umidade', status: 'online', temperatura: '25°C', cpu: '12%', memoria: '18%' },
    { id: 'EQ-008', nome: 'Camera Segurança', status: 'warning', temperatura: '48°C', cpu: '92%', memoria: '87%' },
    { id: 'EQ-009', nome: 'Roteador WiFi', status: 'online', temperatura: '39°C', cpu: '34%', memoria: '41%' },
    { id: 'EQ-010', nome: 'Sensor Movimento', status: 'online', temperatura: '26°C', cpu: '8%', memoria: '15%' },
    { id: 'EQ-011', nome: 'Painel Solar', status: 'online', temperatura: '35°C', cpu: '56%', memoria: '29%' },
    { id: 'EQ-012', nome: 'Medidor Energia', status: 'maintenance', temperatura: '31°C', cpu: '--', memoria: '--' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online': return 'bg-green-500';
      case 'warning': return 'bg-yellow-500';
      case 'offline': return 'bg-red-500';
      case 'maintenance': return 'bg-blue-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'online': return 'Online';
      case 'warning': return 'Atenção';
      case 'offline': return 'Offline';
      case 'maintenance': return 'Manutenção';
      default: return 'Desconhecido';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'online': return '✅';
      case 'warning': return '⚠️';
      case 'offline': return '❌';
      case 'maintenance': return '🔧';
      default: return '❓';
    }
  };

  return (
    <DashboardLayout activeMenuItem="Mosaico">
      <div className="space-y-6">
        {/* Header */}
        <div className="border-b border-gray-200 pb-4">
          <h1 className="text-3xl font-bold text-black">Mosaico de Equipamentos</h1>
          <p className="text-gray-600 mt-2">Visualização em tempo real de todos os equipamentos</p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 items-center">
          <div className="flex items-center space-x-2">
            <label className="text-sm font-medium text-gray-700">Filtrar por status:</label>
            <select className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="all">Todos</option>
              <option value="online">Online</option>
              <option value="warning">Atenção</option>
              <option value="offline">Offline</option>
              <option value="maintenance">Manutenção</option>
            </select>
          </div>
          
          <div className="flex items-center space-x-2">
            <label className="text-sm font-medium text-gray-700">Buscar:</label>
            <input 
              type="text" 
              placeholder="Nome do equipamento..."
              className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <button className="bg-blue-600 text-white px-4 py-1 rounded-md text-sm hover:bg-blue-700 transition-colors">
            🔄 Atualizar
          </button>
        </div>

        {/* Status Summary */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
            <div className="text-2xl mb-2">✅</div>
            <div className="text-lg font-bold text-green-600">8</div>
            <div className="text-sm text-gray-600">Online</div>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
            <div className="text-2xl mb-2">⚠️</div>
            <div className="text-lg font-bold text-yellow-600">2</div>
            <div className="text-sm text-gray-600">Atenção</div>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
            <div className="text-2xl mb-2">❌</div>
            <div className="text-lg font-bold text-red-600">1</div>
            <div className="text-sm text-gray-600">Offline</div>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
            <div className="text-2xl mb-2">🔧</div>
            <div className="text-lg font-bold text-blue-600">1</div>
            <div className="text-sm text-gray-600">Manutenção</div>
          </div>
        </div>

        {/* Equipment Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {equipamentos.map((equipamento) => (
            <div key={equipamento.id} className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              {/* Card Header */}
              <div className="p-4 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900">{equipamento.nome}</h3>
                    <p className="text-sm text-gray-500">{equipamento.id}</p>
                  </div>
                  <div className="text-xl">{getStatusIcon(equipamento.status)}</div>
                </div>
                
                <div className="mt-2">
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium text-white ${getStatusColor(equipamento.status)}`}>
                    {getStatusText(equipamento.status)}
                  </span>
                </div>
              </div>
              
              {/* Card Body */}
              <div className="p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">🌡️ Temperatura</span>
                  <span className="text-sm font-medium text-gray-900">{equipamento.temperatura}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">💻 CPU</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-16 bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${
                          equipamento.cpu === '--' ? 'bg-gray-400' :
                          parseInt(equipamento.cpu) > 80 ? 'bg-red-500' :
                          parseInt(equipamento.cpu) > 60 ? 'bg-yellow-500' : 'bg-green-500'
                        }`}
                        style={{ width: equipamento.cpu === '--' ? '0%' : equipamento.cpu }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-gray-900">{equipamento.cpu}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">🧠 Memória</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-16 bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${
                          equipamento.memoria === '--' ? 'bg-gray-400' :
                          parseInt(equipamento.memoria) > 80 ? 'bg-red-500' :
                          parseInt(equipamento.memoria) > 60 ? 'bg-yellow-500' : 'bg-green-500'
                        }`}
                        style={{ width: equipamento.memoria === '--' ? '0%' : equipamento.memoria }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-gray-900">{equipamento.memoria}</span>
                  </div>
                </div>
              </div>
              
              {/* Card Footer */}
              <div className="p-4 border-t border-gray-200 bg-gray-50">
                <div className="flex space-x-2">
                  <button className="flex-1 bg-blue-600 text-white text-xs py-2 px-3 rounded hover:bg-blue-700 transition-colors">
                    📊 Detalhes
                  </button>
                  <button className="flex-1 bg-gray-600 text-white text-xs py-2 px-3 rounded hover:bg-gray-700 transition-colors">
                    ⚙️ Configurar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-black mb-3">Legenda</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-gray-700">Online - Funcionando normalmente</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <span className="text-gray-700">Atenção - Requer monitoramento</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <span className="text-gray-700">Offline - Não responsivo</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-gray-700">Manutenção - Em manutenção programada</span>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}