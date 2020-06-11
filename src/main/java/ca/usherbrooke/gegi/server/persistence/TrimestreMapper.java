package ca.usherbrooke.gegi.server.persistence;


import ca.usherbrooke.gegi.server.business.Trimestre;
import org.apache.ibatis.annotations.Param;
import org.mybatis.cdi.Mapper;


import java.util.List;

@SuppressWarnings("CdiManagedBeanInconsistencyInspection")
@Mapper
public interface TrimestreMapper {

    List<Trimestre> select();
    void insertTrimestre(@Param("trimestre") Trimestre trimestre);
}
