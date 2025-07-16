import DashboardLayout from '../components/DashboardLayout';

export default function NewDashboard() {
  return (
    <DashboardLayout activeMenuItem="Dashboard">
      <div className="space-y-6">
        {/* Header */}
        <div className="border-b border-gray-200 pb-4">
          <h1 className="text-3xl font-bold text-black">Dashboard Avançado</h1>
          <p className="text-gray-600 mt-2">Visão completa do sistema Monitorum</p>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Receita Total</p>
                <p className="text-2xl font-bold text-green-600">R$ 2.4M</p>
                <p className="text-xs text-green-500 mt-1">↗ +12.5% vs mês anterior</p>
              </div>
              <div className="text-3xl">💰</div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Clientes Ativos</p>
                <p className="text-2xl font-bold text-blue-600">1,247</p>
                <p className="text-xs text-blue-500 mt-1">↗ +8.2% vs mês anterior</p>
              </div>
              <div className="text-3xl">👥</div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Uptime Sistema</p>
                <p className="text-2xl font-bold text-green-600">99.8%</p>
                <p className="text-xs text-green-500 mt-1">↗ +0.3% vs mês anterior</p>
              </div>
              <div className="text-3xl">⚡</div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Alertas Críticos</p>
                <p className="text-2xl font-bold text-red-600">3</p>
                <p className="text-xs text-red-500 mt-1">↓ -50% vs mês anterior</p>
              </div>
              <div className="text-3xl">🚨</div>
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Performance Chart */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-black">Performance do Sistema</h2>
              <p className="text-sm text-gray-500">Últimos 7 dias</p>
            </div>
            <div className="p-6">
              <div className="h-64 flex items-end justify-between space-x-2">
                {[85, 92, 78, 96, 88, 94, 91].map((value, index) => (
                  <div key={index} className="flex flex-col items-center space-y-2">
                    <div 
                      className="bg-blue-500 rounded-t w-8 transition-all hover:bg-blue-600"
                      style={{ height: `${(value / 100) * 200}px` }}
                    ></div>
                    <span className="text-xs text-gray-500">
                      {['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'][index]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Status Distribution */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-black">Status dos Equipamentos</h2>
              <p className="text-sm text-gray-500">Distribuição atual</p>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-medium text-gray-700">Online</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-32 bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: '78%' }}></div>
                    </div>
                    <span className="text-sm text-gray-600">342</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                    <span className="text-sm font-medium text-gray-700">Manutenção</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-32 bg-gray-200 rounded-full h-2">
                      <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '15%' }}></div>
                    </div>
                    <span className="text-sm text-gray-600">67</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                    <span className="text-sm font-medium text-gray-700">Offline</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-32 bg-gray-200 rounded-full h-2">
                      <div className="bg-red-500 h-2 rounded-full" style={{ width: '7%' }}></div>
                    </div>
                    <span className="text-sm text-gray-600">31</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activities and Top Alerts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Activities */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-black">Atividades Recentes</h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-800">Sistema de backup executado com sucesso</p>
                    <p className="text-xs text-gray-500">há 2 minutos</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-800">Novo cliente cadastrado - TechCorp Ltd</p>
                    <p className="text-xs text-gray-500">há 15 minutos</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-800">Manutenção programada iniciada - Setor B</p>
                    <p className="text-xs text-gray-500">há 1 hora</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-800">Atualização de firmware concluída</p>
                    <p className="text-xs text-gray-500">há 2 horas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Top Alerts */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-black">Alertas Prioritários</h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3 p-3 bg-red-50 rounded-lg border border-red-200">
                  <div className="text-red-500 text-lg">🚨</div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-red-800">Sensor crítico offline</p>
                    <p className="text-xs text-red-600">Equipamento EQ-001 - Sala de Servidores</p>
                    <p className="text-xs text-red-500">há 5 minutos</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                  <div className="text-yellow-500 text-lg">⚠️</div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-yellow-800">Temperatura elevada</p>
                    <p className="text-xs text-yellow-600">Sensor TEMP-045 - 85°C detectado</p>
                    <p className="text-xs text-yellow-500">há 12 minutos</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 p-3 bg-orange-50 rounded-lg border border-orange-200">
                  <div className="text-orange-500 text-lg">🔧</div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-orange-800">Manutenção pendente</p>
                    <p className="text-xs text-orange-600">Equipamento EQ-023 requer atenção</p>
                    <p className="text-xs text-orange-500">há 1 hora</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-black">Ações Rápidas</h2>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <button className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="text-2xl mb-2">📊</div>
                <span className="text-sm font-medium text-gray-700">Gerar Relatório</span>
              </button>
              
              <button className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="text-2xl mb-2">⚙️</div>
                <span className="text-sm font-medium text-gray-700">Configurar Sensor</span>
              </button>
              
              <button className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="text-2xl mb-2">👥</div>
                <span className="text-sm font-medium text-gray-700">Adicionar Usuário</span>
              </button>
              
              <button className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="text-2xl mb-2">🔄</div>
                <span className="text-sm font-medium text-gray-700">Sincronizar Dados</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}