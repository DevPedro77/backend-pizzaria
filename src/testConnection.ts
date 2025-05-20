import prismaClient from './prisma/index';

async function main() {
    try {
        // Testa a conexão executando uma consulta simples
        const result = await prismaClient.$queryRaw`SELECT 1`;
        console.log('Conexão bem-sucedida:', result);
    } catch (error) {
        console.error('Erro ao conectar ao banco de dados:', error);
    } finally {
        await prismaClient.$disconnect();
    }
}

main();
