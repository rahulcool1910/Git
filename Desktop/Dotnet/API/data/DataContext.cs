using Microsoft.EntityFrameworkCore;
using API.Entity;
namespace API.data
{
    public class DataContext : DbContext
    {
        public DataContext( DbContextOptions options) : base(options)
        {

        }
        public DbSet<User> Users { get; set; }
    }
}