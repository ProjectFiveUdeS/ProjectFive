package ca.usherbrooke.gegi.server.persistence;

import ca.usherbrooke.gegi.server.business.local;
import org.apache.ibatis.annotations.Param;
import org.mybatis.cdi.Mapper;


import java.util.List;

@SuppressWarnings("CdiManagedBeanInconsistencyInspection")
@Mapper
public interface LocalMapper {

    List<local> select(@Param("numeroLocal") String numeroLocal);
    List<local> selectAll();
    void insertLocal(@Param("local") local local);
}
