using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace MeetingWebAPI.Data
{
    public class GenericRepository<T> : IRepository<T> where T : class
    {
        private MeetingDbContext db = null;
        private DbSet<T> table = null;

        public GenericRepository()
        {
            this.db = new MeetingDbContext();
            this.table = db.Set<T>();
        }


        public GenericRepository(MeetingDbContext db)
        {
            this.db = db;
            this.table = db.Set<T>();
        }
        public async void Delete(object id)
        {
            T existing = await table.FindAsync(id);
            if (existing != null)
            {
                table.Remove(existing);
                db.SaveChanges();
            }
        }

        public T GetByID(object id)
        {
            return table.Find(id);

        }


        public IEnumerable<T> GetAll()
        {
            var t = table.ToList();

            if (t != null)
                return t;

            return null;
        }
        public async void Insert(T t)
        {
            await table.AddAsync(t);
            db.SaveChanges();
        }

        public void Update(T t)
        {
            table.Attach(t);
            db.SaveChanges();
        }
    }
}
