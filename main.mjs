import pg from "pg";
const cxnStr = process.env.DATABASE_URL

const pool = new pg.Pool({
  connectionString: cxnStr
})

async function runQuery(q){
  const result = await pool.query(q)
  return result
}

async function getResult(q) {
  const result = await runQuery(q).then(d => d)
  return result.rows
}

// const query = 'select *, 1 as blah from foo'

var args = process.argv.slice(2)
var query = args[0]

getResult(query).then((d) => {
  console.log(d)
})
pool.end()
