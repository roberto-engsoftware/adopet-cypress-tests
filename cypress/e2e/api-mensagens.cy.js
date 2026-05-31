describe('Api Adopet', () => {
    const authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI3ZTY1ZTRiZS04YTBlLTRlYTgtYTViYy04NGEyNmJkMjllZGMiLCJhZG9wdGVyTmFtZSI6IkpvYW8gTHVjYXMiLCJpYXQiOjE3ODAyNDg4OTksImV4cCI6MTc4MDUwODA5OX0.QA_beeml4ews0vFgNyf3Xj-652T1dn3k9KVLp9Vm534`;

    it('Mensagens API', () => {
        cy.request({
            method: 'GET',
            url: 'https://adopet-api-i8qu.onrender.com/mensagem/7e65e4be-8a0e-4ea8-a5bc-84a26bd29edc',
            headers: {authorization},
        }).then((res) => {
           expect(res.status).to.eq(200);
            expect(res.body).to.not.be.empty
            expect(res.body).to.have.property('msg');
        });


});});