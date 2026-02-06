# Academia Santiago - Plataforma de Educação Imobiliária

Plataforma moderna e responsiva para hospedagem de cursos de educação imobiliária, com design aprimorado e funcionalidades avançadas.

## 🎯 Características

- ✅ **Design Moderno**: Interface limpa e profissional com gradientes e sombras suaves
- ✅ **Cards Aprimorados**: Detalhes visuais melhorados com badges, progresso e metadados
- ✅ **Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- ✅ **Autenticação**: Sistema de login com usuários de teste
- ✅ **Sidebar Navegação**: Menu lateral com lista de cursos e progresso
- ✅ **7 Cursos Inclusos**: MCMV, Financiamento, Vendas, Documentação, Elegibilidade, Pós-Venda, Investimentos
- ✅ **Sem Dependências Externas**: Apenas HTML, CSS e JavaScript vanilla
- ✅ **Fácil Deploy**: Pronto para rodar em qualquer servidor Node.js

## 🚀 Instalação

### Opção 1: Node.js (Recomendado)

```bash
# 1. Clone ou baixe os arquivos
cd academia-santiago-v2

# 2. Instale as dependências (opcional, não há dependências externas)
npm install

# 3. Inicie o servidor
npm start

# 4. Abra no navegador
# http://localhost:3000
```

### Opção 2: Python

```bash
# Python 3
python -m http.server 3000

# Python 2
python -m SimpleHTTPServer 3000
```

### Opção 3: PHP

```bash
php -S localhost:3000
```

### Opção 4: Nginx/Apache

Copie os arquivos para a pasta `public_html` ou `www` do seu servidor.

## 📝 Credenciais de Teste

| Usuário | Senha | Tipo |
|---------|-------|------|
| corretor1 | senha123 | Usuário |
| corretor2 | senha123 | Usuário |
| admin | admin123 | Admin |

## 🎨 Design Highlights

### Paleta de Cores
- **Primária**: Azul (#3243c3)
- **Secundária**: Azul Escuro (#1a3a52)
- **Fundo**: Branco (#ffffff)
- **Texto**: Cinza (#333333)

### Tipografia
- **Títulos**: Poppins (600, 700, 800)
- **Corpo**: Inter (300, 400, 500, 600, 700)

### Componentes
- Cards com hover effect
- Botões com gradiente
- Barras de progresso animadas
- Badges de status
- Sidebar com navegação

## 📱 Estrutura de Arquivos

```
academia-santiago-v2/
├── index.html          # Página principal (HTML + CSS + JS)
├── server.js           # Servidor Node.js
├── package.json        # Configuração do projeto
├── README.md           # Este arquivo
└── .env (opcional)     # Variáveis de ambiente
```

## 🔧 Configuração Avançada

### Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
PORT=3000
NODE_ENV=production
```

### Customização de Cursos

Edite o array `courses` no arquivo `index.html`:

```javascript
const courses = [
    {
        id: 1,
        title: 'Seu Curso',
        description: 'Descrição do curso',
        modules: 5,
        icon: '📚',
        progress: 0,
        badge: 'Novo'
    },
    // ... mais cursos
];
```

### Customização de Usuários

Edite o objeto `users` no arquivo `index.html`:

```javascript
const users = {
    'seu_usuario': 'sua_senha',
    'outro_usuario': 'outra_senha'
};
```

## 🌐 Deploy em Servidores Populares

### Vercel
```bash
vercel deploy
```

### Heroku
```bash
heroku create seu-app
git push heroku main
```

### Railway
Conecte seu repositório GitHub e faça deploy automático.

### Render
Crie um novo Web Service e aponte para este repositório.

### DigitalOcean
```bash
scp -r academia-santiago-v2 root@seu-ip:/var/www/
```

## 🎯 Funcionalidades Futuras

- [ ] Sistema de certificados
- [ ] Comunidade/Fórum
- [ ] Analytics e relatórios
- [ ] Gamificação (badges, pontos)
- [ ] App mobile nativo
- [ ] Integração com pagamento
- [ ] Sistema de notificações
- [ ] Suporte a múltiplos idiomas

## 📊 Performance

- **Tamanho**: ~50KB (HTML + CSS + JS inline)
- **Tempo de Carregamento**: < 1s
- **Compatibilidade**: Chrome, Firefox, Safari, Edge
- **Mobile**: 100% responsivo

## 🔒 Segurança

⚠️ **Nota**: Este é um protótipo. Para produção:
- Use HTTPS
- Implemente autenticação segura (JWT, OAuth)
- Valide dados no servidor
- Use variáveis de ambiente para senhas
- Implemente rate limiting

## 📞 Suporte

Para dúvidas ou sugestões, entre em contato com a Academia Santiago.

## 📄 Licença

MIT License - Sinta-se livre para usar e modificar este projeto.

---

**Desenvolvido com ❤️ para a Academia Grupo Santiago**
