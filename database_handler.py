import psycopg2


def connect_db(connect_data):

    conn = None
    urllib.parse.uses_netloc.append('postgres')
    url = urllib.parse.urlparse(os.environ.get('DATABASE_URL'))
    try:
        conn = psycopg2.connect(**connect_data)
        return conn
    except:
        result = 'Could not connect to database'
        return result


def handle_database(query, query_variables=None):
    result = {}
    connect_data = {
                    'database': url.path[1:],
                    'user': url.username,
                    'password': url.password,
                    'host': url.hostname,
                    'port': url.port
                    }
    connection = connect_db(connect_data)

    # check if connect_db function returnd with the message: connection error
    if connection == 'connection error':
        return'Could not connect to database'
    else:
        try:
            connection.autocommit = True
            cursor = connection.cursor()
            cursor.execute(query, query_variables)

            # check the query is Select type, if it is it fetches the changes
            if "SELECT" in query:
                result = cursor.fetchall()
            cursor.close()
        except psycopg2.DataError:
            result = 'Given datas are not proper'
        except psycopg2.DatabaseError:
            result = 'Server could not connect to Database'

        # result is a list that contains tuples (one tuple equals one row)
        return result
