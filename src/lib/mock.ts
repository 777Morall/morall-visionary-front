export type CategoryName =
  | "Pré-pago"
  | "Games"
  | "Streaming"
  | "Compras"
  | "Música"
  | "Viagem";

export interface GiftCard {
  id: string;
  name: string;
  category: CategoryName;
  icon: string;
  values: number[];
  gradient: string;
  rating: number;
  sold: number;
  badge?: string;
  desc: string;
}

export const categories: { name: CategoryName; icon: string; count: number }[] = [
  { name: "Pré-pago", icon: "CreditCard", count: 24 },
  { name: "Games", icon: "Gamepad2", count: 38 },
  { name: "Streaming", icon: "PlayCircle", count: 17 },
  { name: "Compras", icon: "ShoppingBag", count: 29 },
  { name: "Música", icon: "Music", count: 12 },
  { name: "Viagem", icon: "Plane", count: 9 },
];

export const giftCards: GiftCard[] = [
  {
    id: "prepaid-global",
    name: "Cartão Pré-pago Global",
    category: "Pré-pago",
    icon: "CreditCard",
    values: [50, 100, 150, 250],
    gradient: "linear-gradient(135deg, #007ded 0%, #35c5ff 100%)",
    rating: 4.9,
    sold: 1820,
    badge: "Mais vendido",
    desc: "Cartão pré-pago recarregável aceito em milhares de lojas online.",
  },
  {
    id: "gamer-pro",
    name: "Vale Gamer Pro",
    category: "Games",
    icon: "Gamepad2",
    values: [30, 60, 100, 200],
    gradient: "linear-gradient(135deg, #6d28d9 0%, #007ded 100%)",
    rating: 4.8,
    sold: 3120,
    badge: "Popular",
    desc: "Crédito instantâneo para suas plataformas de jogos favoritas.",
  },
  {
    id: "stream-plus",
    name: "Vale Streaming Plus",
    category: "Streaming",
    icon: "PlayCircle",
    values: [25, 50, 90],
    gradient: "linear-gradient(135deg, #db2777 0%, #f43f5e 100%)",
    rating: 4.7,
    sold: 2440,
    desc: "Assista sem limites com créditos para serviços de streaming.",
  },
  {
    id: "shopping-max",
    name: "Cartão de Compras Max",
    category: "Compras",
    icon: "ShoppingBag",
    values: [50, 100, 200, 500],
    gradient: "linear-gradient(135deg, #0891b2 0%, #35c5ff 100%)",
    rating: 4.9,
    sold: 1980,
    badge: "Novo",
    desc: "Compre de tudo nos maiores marketplaces com saldo garantido.",
  },
  {
    id: "music-vibe",
    name: "Vale Música Vibe",
    category: "Música",
    icon: "Music",
    values: [20, 40, 75],
    gradient: "linear-gradient(135deg, #16a34a 0%, #35c5ff 100%)",
    rating: 4.6,
    sold: 1210,
    desc: "Milhões de músicas na palma da mão com créditos digitais.",
  },
  {
    id: "travel-go",
    name: "Cartão Viagem Go",
    category: "Viagem",
    icon: "Plane",
    values: [100, 250, 500, 1000],
    gradient: "linear-gradient(135deg, #f59e0b 0%, #f43f5e 100%)",
    rating: 4.8,
    sold: 870,
    desc: "Use em passagens, hospedagens e experiências pelo mundo.",
  },
  {
    id: "gamer-elite",
    name: "Vale Games Elite",
    category: "Games",
    icon: "Trophy",
    values: [60, 120, 250],
    gradient: "linear-gradient(135deg, #4f46e5 0%, #35c5ff 100%)",
    rating: 4.9,
    sold: 1540,
    desc: "Edição especial com bônus para colecionadores e competitivos.",
  },
  {
    id: "prepaid-premium",
    name: "Cartão Pré-pago Premium",
    category: "Pré-pago",
    icon: "Gem",
    values: [150, 300, 600],
    gradient: "linear-gradient(135deg, #0f172a 0%, #007ded 100%)",
    rating: 5.0,
    sold: 640,
    badge: "Premium",
    desc: "Limites elevados e vantagens exclusivas para grandes compras.",
  },
];

export interface Order {
  id: string;
  card: string;
  category: CategoryName;
  value: string;
  date: string;
  status: "Entregue" | "Processando" | "Falhou";
  code: string;
}

export const orders: Order[] = [
  { id: "ORD-10482", card: "Cartão Pré-pago Global", category: "Pré-pago", value: "R$ 100", date: "10/07/2026", status: "Entregue", code: "GLBL-9F2K-7QX1-4M8P" },
  { id: "ORD-10480", card: "Vale Gamer Pro", category: "Games", value: "R$ 60", date: "09/07/2026", status: "Entregue", code: "GMR-2K7A-11ZP-88QD" },
  { id: "ORD-10477", card: "Vale Streaming Plus", category: "Streaming", value: "R$ 50", date: "08/07/2026", status: "Entregue", code: "STRM-5T9Q-3XW2-6KL0" },
  { id: "ORD-10475", card: "Cartão de Compras Max", category: "Compras", value: "R$ 200", date: "07/07/2026", status: "Processando", code: "SHOP-••••-••••-••••" },
  { id: "ORD-10470", card: "Vale Música Vibe", category: "Música", value: "R$ 40", date: "05/07/2026", status: "Entregue", code: "MSC-8H2D-9PQ4-1RT7" },
  { id: "ORD-10466", card: "Cartão Viagem Go", category: "Viagem", value: "R$ 250", date: "03/07/2026", status: "Falhou", code: "TRVL-••••-••••-••••" },
];

export const usageData = [
  { month: "Jan", value: 4 },
  { month: "Fev", value: 7 },
  { month: "Mar", value: 5 },
  { month: "Abr", value: 11 },
  { month: "Mai", value: 9 },
  { month: "Jun", value: 14 },
];

export const salesData = [
  { month: "Jan", value: 1200 },
  { month: "Fev", value: 2100 },
  { month: "Mar", value: 1750 },
  { month: "Abr", value: 3200 },
  { month: "Mai", value: 2850 },
  { month: "Jun", value: 4120 },
];

export interface SellerListing {
  id: string;
  card: string;
  category: CategoryName;
  stock: number;
  price: string;
  sold: number;
  status: "Ativo" | "Pausado" | "Esgotado";
}

export const sellerListings: SellerListing[] = [
  { id: "LST-201", card: "Cartão Pré-pago Global", category: "Pré-pago", stock: 42, price: "R$ 100", sold: 318, status: "Ativo" },
  { id: "LST-202", card: "Vale Gamer Pro", category: "Games", stock: 15, price: "R$ 60", sold: 512, status: "Ativo" },
  { id: "LST-203", card: "Vale Streaming Plus", category: "Streaming", stock: 0, price: "R$ 50", sold: 210, status: "Esgotado" },
  { id: "LST-204", card: "Cartão de Compras Max", category: "Compras", stock: 28, price: "R$ 200", sold: 96, status: "Ativo" },
  { id: "LST-205", card: "Vale Música Vibe", category: "Música", stock: 60, price: "R$ 40", sold: 74, status: "Pausado" },
];

export const recentSales = [
  { buyer: "Marina S.", card: "Vale Gamer Pro", amount: "R$ 60", time: "há 4 min" },
  { buyer: "Carlos L.", card: "Cartão Pré-pago Global", amount: "R$ 150", time: "há 22 min" },
  { buyer: "Ana F.", card: "Vale Streaming Plus", amount: "R$ 50", time: "há 1 h" },
  { buyer: "João P.", card: "Cartão de Compras Max", amount: "R$ 200", time: "há 2 h" },
  { buyer: "Lucia M.", card: "Cartão Viagem Go", amount: "R$ 500", time: "há 3 h" },
];

export const faqs = [
  { q: "Como recebo meu gift card?", a: "Após a confirmação do Pix, o código do card é entregue instantaneamente na área Meus Cards e por e-mail." },
  { q: "Os cards têm validade?", a: "Cada modelo possui sua própria validade, sempre exibida na página do produto antes da compra." },
  { q: "Posso vender meus próprios cards?", a: "Sim. Na área de Vendas você cria anúncios, define preços e acompanha seus resultados em tempo real." },
  { q: "O pagamento é seguro?", a: "Todo o fluxo é feito via Pix com confirmação automática e ambiente protegido." },
  { q: "Posso pedir reembolso?", a: "Cards não utilizados podem ser reembolsados conforme a política de cada modelo." },
];

export const adminMetrics = [
  { label: "Receita (mês)", value: "R$ 142.980", delta: "+18,4%", icon: "TrendingUp" },
  { label: "Cards vendidos", value: "9.altered", delta: "+7,1%", icon: "CreditCard" },
  { label: "Vendedores ativos", value: "312", delta: "+4,7%", icon: "Store" },
  { label: "Pedidos pendentes", value: "18", delta: "-3", icon: "Clock" },
  { label: "Novos usuários", value: "1.284", delta: "+11,9%", icon: "Users" },
  { label: "Taxa de conversão", value: "6,4%", delta: "+0,5%", icon: "Activity" },
];

export const adminUsers = [
  { name: "Marina Souza", email: "marina@email.com", plan: "Comprador", status: "Ativo", since: "02/2026" },
  { name: "Carlos Lima", email: "carlos@email.com", plan: "Vendedor", status: "Ativo", since: "11/2025" },
  { name: "Ana Ferreira", email: "ana@email.com", plan: "Comprador", status: "Pendente", since: "06/2026" },
  { name: "João Pedro", email: "joao@email.com", plan: "Vendedor", status: "Cancelado", since: "01/2026" },
  { name: "Lucia Martins", email: "lucia@email.com", plan: "Vendedor", status: "Ativo", since: "03/2026" },
];

export const adminPayments = [
  { id: "PIX-99213", user: "Marina Souza", amount: "R$ 100,00", status: "Aprovado", date: "10/07/2026" },
  { id: "PIX-99210", user: "Carlos Lima", amount: "R$ 150,00", status: "Aprovado", date: "10/07/2026" },
  { id: "PIX-99208", user: "Ana Ferreira", amount: "R$ 50,00", status: "Pendente", date: "09/07/2026" },
  { id: "PIX-99201", user: "Lucia Martins", amount: "R$ 500,00", status: "Aprovado", date: "08/07/2026" },
  { id: "PIX-99198", user: "João Pedro", amount: "R$ 200,00", status: "Falhou", date: "07/07/2026" },
];

export const adminLogs = [
  { time: "14:02", text: "Novo pedido pago — ORD-10482" },
  { time: "13:58", text: "Card entregue — Vale Gamer Pro" },
  { time: "13:40", text: "Novo anúncio criado — LST-206" },
  { time: "13:21", text: "Tentativa de compra bloqueada (antifraude)" },
  { time: "12:55", text: "Novo vendedor aprovado — Carlos Lima" },
];
