using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MeetingWebAPI.Data
{
    public interface IRepository<T> where T: class
    {
        T GetByID(object id);
        IEnumerable<T> GetAll();
        void Delete(object id);

        void Update(T t);

        void Insert(T t);
    }
}
