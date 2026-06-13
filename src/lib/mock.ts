export type PlanId = "start" | "pro" | "elite";

export interface Plan {
  id: PlanId;
  name: string;
  price: number;
  tagline: string;
  features: string[];
  cta: string;
  highlight?: boolean;
  badge?: string;
  queries: string;
}

export const plans: Plan[] = [
  {
    id: "start",
    name: "Start",
    price: 30,
    tagline: "Para quem está começando",
    queries: "100 consultas/mês",
    features: [
      "Painel privado",
      "Consultas mensais limitadas",
      "Histórico básico",
      "Suporte padrão",
    ],
    cta: "Assinar Start",
  },
  {
    id: "pro",
    name: "Pro",
    price: 50,
    tagline: "O equilíbrio ideal",
    queries: "350 consultas/mês",
    features: [
      "Mais consultas mensais",
      "Histórico completo",
      "Prioridade visual",
      "Suporte prioritário",
    ],
    cta: "Assinar Pro",
    highlight: true,
    badge: "Mais escolhido",
  },
  {
    id: "elite",
    name: "Elite",
    price: 100,
    tagline: "Para alto volume",
    queries: "Consultas ilimitadas*",
    features: [
      "Maior limite mensal",
      "Recursos avançados",
      "Prioridade máxima",
      "Suporte premium",
    ],
    cta: "Assinar Elite",
  },
];

export const comparison = [
  { label: "Consultas mensais", start: "100", pro: "350", elite: "Ilimitadas*" },
  { label: "Histórico", start: "Básico", pro: "Completo", elite: "Completo + export" },
  { label: "Prioridade de fila", start: "—", pro: "Alta", elite: "Máxima" },
  { label: "Suporte", start: "Padrão", pro: "Prioritário", elite: "Premium 24/7" },
  { label: "Relatórios", start: "—", pro: "Mensal", elite: "Avançado" },
  { label: "Acesso à API mock", start: "—", pro: "—", elite: "Incluído" },
];

export const features = [
  { icon: "LayoutDashboard", title: "Painel privado", desc: "Um ambiente exclusivo só seu, organizado e protegido." },
  { icon: "History", title: "Histórico organizado", desc: "Acompanhe todas as suas consultas em um só lugar." },
  { icon: "QrCode", title: "Pagamento Pix", desc: "Assinatura mensal simples e automática via Pix." },
  { icon: "CreditCard", title: "Controle de assinatura", desc: "Gerencie seu plano e renovações em poucos cliques." },
  { icon: "Gauge", title: "Limites por plano", desc: "Saiba exatamente quantas consultas você ainda tem." },
  { icon: "Zap", title: "Interface rápida", desc: "Respostas em segundos com uma UI fluida." },
  { icon: "Activity", title: "Status em tempo real", desc: "Veja o andamento de cada consulta instantaneamente." },
  { icon: "ShieldCheck", title: "Design seguro", desc: "Privacidade e uso responsável no centro de tudo." },
];

export const steps = [
  { n: "01", title: "Crie sua conta", desc: "Cadastro rápido em segundos." },
  { n: "02", title: "Escolha seu plano", desc: "Start, Pro ou Elite." },
  { n: "03", title: "Pague via Pix", desc: "Confirmação automática." },
  { n: "04", title: "Acesse o dashboard", desc: "Seu painel premium liberado." },
  { n: "05", title: "Faça suas consultas", desc: "Rápido, privado e organizado." },
];

export const securityItems = [
  { icon: "ShieldCheck", title: "Uso responsável", desc: "Diretrizes claras para um uso autorizado e ético." },
  { icon: "Lock", title: "Privacidade", desc: "Seus dados de acesso ficam protegidos." },
  { icon: "ScrollText", title: "Logs de atividade", desc: "Transparência total sobre cada ação." },
  { icon: "KeyRound", title: "Controle de acesso", desc: "Apenas você entra no seu painel." },
  { icon: "ShieldAlert", title: "Limites antiabuso", desc: "Proteções automáticas contra mau uso." },
  { icon: "EyeOff", title: "Ambiente privado", desc: "Espaço isolado e dedicado a você." },
];

export const faqs = [
  { q: "Como funciona a assinatura?", a: "Você escolhe um plano mensal, paga via Pix e recebe acesso imediato ao painel premium. A renovação acontece a cada 30 dias." },
  { q: "O acesso é liberado após o pagamento?", a: "Sim. Assim que o Pix é confirmado, seu acesso ao dashboard é liberado automaticamente." },
  { q: "Posso trocar de plano?", a: "Claro. Você pode fazer upgrade ou downgrade a qualquer momento dentro da área de assinatura." },
  { q: "O pagamento é via Pix?", a: "Sim, todo o fluxo de pagamento é feito por Pix, de forma rápida e segura." },
  { q: "Existe limite de consultas?", a: "Cada plano possui um limite mensal de consultas, exibido em tempo real no seu painel." },
  { q: "Posso cancelar?", a: "Sim. O cancelamento é simples e pode ser feito diretamente pelo painel, sem burocracia." },
  { q: "A plataforma é segura?", a: "Trabalhamos com ambiente privado, controle de acesso e diretrizes de uso responsável e autorizado." },
];

export const recentQueries = [
  { id: "Q-10482", type: "Consulta padrão", input: "•••• ••8421", date: "13/06/2026", status: "Concluída", plan: "Pro" },
  { id: "Q-10481", type: "Consulta avançada", input: "•••• ••1190", date: "12/06/2026", status: "Concluída", plan: "Pro" },
  { id: "Q-10479", type: "Consulta padrão", input: "•••• ••3375", date: "12/06/2026", status: "Concluída", plan: "Pro" },
  { id: "Q-10477", type: "Consulta padrão", input: "•••• ••0028", date: "11/06/2026", status: "Falhou", plan: "Pro" },
  { id: "Q-10470", type: "Consulta avançada", input: "•••• ••7762", date: "10/06/2026", status: "Concluída", plan: "Pro" },
  { id: "Q-10465", type: "Consulta padrão", input: "•••• ••5510", date: "09/06/2026", status: "Pendente", plan: "Pro" },
];

export const usageData = [
  { month: "Jan", value: 42 },
  { month: "Fev", value: 80 },
  { month: "Mar", value: 65 },
  { month: "Abr", value: 110 },
  { month: "Mai", value: 95 },
  { month: "Jun", value: 138 },
];

export const adminMetrics = [
  { label: "MRR", value: "R$ 48.350", delta: "+12,4%", icon: "TrendingUp" },
  { label: "Usuários ativos", value: "1.284", delta: "+3,1%", icon: "Users" },
  { label: "Assinaturas ativas", value: "967", delta: "+5,7%", icon: "BadgeCheck" },
  { label: "Pagamentos pendentes", value: "23", delta: "-2", icon: "Clock" },
  { label: "Consultas no mês", value: "84.210", delta: "+18,9%", icon: "Search" },
  { label: "Churn", value: "1,9%", delta: "-0,3%", icon: "Activity" },
];

export const adminUsers = [
  { name: "Marina Souza", email: "marina@email.com", plan: "Pro", status: "Ativo", since: "02/2026" },
  { name: "Carlos Lima", email: "carlos@email.com", plan: "Elite", status: "Ativo", since: "11/2025" },
  { name: "Ana Ferreira", email: "ana@email.com", plan: "Start", status: "Pendente", since: "06/2026" },
  { name: "João Pedro", email: "joao@email.com", plan: "Pro", status: "Cancelado", since: "01/2026" },
  { name: "Lucia Martins", email: "lucia@email.com", plan: "Elite", status: "Ativo", since: "03/2026" },
];

export const adminPayments = [
  { id: "PIX-99213", user: "Marina Souza", amount: "R$ 50,00", status: "Aprovado", date: "13/06/2026" },
  { id: "PIX-99210", user: "Carlos Lima", amount: "R$ 100,00", status: "Aprovado", date: "13/06/2026" },
  { id: "PIX-99208", user: "Ana Ferreira", amount: "R$ 30,00", status: "Pendente", date: "12/06/2026" },
  { id: "PIX-99201", user: "Lucia Martins", amount: "R$ 100,00", status: "Aprovado", date: "11/06/2026" },
  { id: "PIX-99198", user: "João Pedro", amount: "R$ 50,00", status: "Falhou", date: "10/06/2026" },
];

export const adminLogs = [
  { time: "14:02", text: "Novo usuário cadastrado — marina@email.com" },
  { time: "13:58", text: "Pagamento aprovado — PIX-99213" },
  { time: "13:40", text: "Upgrade de plano — Start → Pro" },
  { time: "13:21", text: "Tentativa de acesso bloqueada (limite antiabuso)" },
  { time: "12:55", text: "Assinatura renovada — Carlos Lima" },
];
