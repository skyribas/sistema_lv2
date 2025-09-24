import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

// Importando as rotas
import veiculoRoute from './routes/veiculoRoute.js';
import usuarioRoutes from './routes/usuarioRoutes.js';
//import categoriaRoute from './routes/categoriaRoute.js'

const app = express();

app.use(cors());
app.use(express.json());


// Rotas de públicas
app.get('/',(req,res)=>{
    const rootDomain = req.protocol + '://' + req.get('host');
    res.status(200).json({     
        status_server: 'ok',
        dominio_raiz : rootDomain,
        atualização: '14/09/2024 - 18:42',
        rotas:{
            'GET - Consultar veículo': `${rootDomain}/api/veiculo`,
            'GET - Consultar todos os veículos': `${rootDomain}/api/veiculos`,
            'POST - Cadastrar veículo':`${rootDomain}/api/veiculo`,
            'POST - Cadastrar usuario':`${rootDomain}/api/usuario`
        }
    });
});

// Configurando as rotas
app.use('/api', veiculoRoute);
app.use('/api', usuarioRoutes);
//app.use('/api', categoriaRoute);

const PORT = process.env.PORT || 3000; 
app.listen(PORT,()=>{
    console.log('Sistema inicializado: ', `Acesso: http://localhost:${PORT}`);
});
