import pg from "pg";
const cxnStr = process.env.DATABASE_URL

const pool = new pg.Pool({
  connectionString: cxnStr
})

const query = 'select *, 1 as blah from foo'

async function makeQuery(q){
  const result = await pool.query(q)
  return result
}

async function getResult() {
  const result = await makeQuery(query).then(d => d)
  return result.fields
}

getResult().then((d) => {
  console.log(d)
})
pool.end()
